const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

export type SpotifyTrack = {
    name: string;
    artist: string;
    album: string;
    albumImage: string | null;
    url: string;
};

type SpotifyApiTrack = {
    name: string;
    external_urls: { spotify: string };
    artists: { name: string }[];
    album: { name: string; images: { url: string; width: number; height: number }[] };
};

function getCreds() {
    const id = process.env.SPOTIFY_CLIENT_ID;
    const secret = process.env.SPOTIFY_CLIENT_SECRET;
    if (!id || !secret) return null;
    return { id, secret };
}

async function getAccessToken(): Promise<string | null> {
    const creds = getCreds();
    if (!creds) return null;

    const basic = Buffer.from(`${creds.id}:${creds.secret}`).toString("base64");
    const res = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ grant_type: "client_credentials" }),
        next: { revalidate: 3000 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { access_token?: string };
    return data.access_token ?? null;
}

function pickAlbumImage(images: SpotifyApiTrack["album"]["images"]): string | null {
    if (!images?.length) return null;
    const small = images.find((i) => i.width && i.width <= 300);
    return (small ?? images[images.length - 1]).url;
}

function shapeTrack(t: SpotifyApiTrack): SpotifyTrack {
    return {
        name: t.name,
        artist: t.artists.map((a) => a.name).join(", "),
        album: t.album.name,
        albumImage: pickAlbumImage(t.album.images),
        url: t.external_urls.spotify,
    };
}

export async function searchTrack(query: string): Promise<SpotifyTrack | null> {
    const token = await getAccessToken();
    if (!token) return null;

    const url = `${SEARCH_ENDPOINT}?q=${encodeURIComponent(query)}&type=track&limit=1`;
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { tracks?: { items: SpotifyApiTrack[] } };
    const hit = data.tracks?.items?.[0];
    return hit ? shapeTrack(hit) : null;
}
