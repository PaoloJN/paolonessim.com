import { searchTrack, type SpotifyTrack } from "@/lib/spotify";
import EyebrowLine from "./eyebrow";

// Drop in any "song artist" string — the server-side Spotify search fills in
// the real metadata and album art on build.
const TRACK_QUERY = "Everything In Its Right Place Radiohead";

const FALLBACK_TRACK: SpotifyTrack = {
    name: "Everything In Its Right Place",
    artist: "Radiohead",
    album: "Kid A",
    albumImage: null,
    url: "https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8",
};

function Bars() {
    return (
        <span className="flex items-end gap-[2px] w-[18px] h-4" aria-hidden>
            <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[60%]" />
            <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[90%] [animation-delay:0.2s]" />
            <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[50%] [animation-delay:0.4s]" />
            <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[80%] [animation-delay:0.1s]" />
        </span>
    );
}

function AlbumArt({ track }: { track: SpotifyTrack }) {
    if (track.albumImage) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={track.albumImage}
                alt={`${track.album} cover`}
                width={52}
                height={52}
                className="w-[52px] h-[52px] rounded-md flex-none border border-rule-subtle object-cover"
                loading="lazy"
            />
        );
    }
    return (
        <div
            className="w-[52px] h-[52px] rounded-md bg-bg-inset flex-none border border-rule-subtle flex items-center justify-center font-mono text-[10px] text-fg-faint px-1 text-center leading-tight"
            aria-hidden
        >
            {track.album.slice(0, 8)}
        </div>
    );
}

export default async function OffTheClock() {
    const track = (await searchTrack(TRACK_QUERY)) ?? FALLBACK_TRACK;

    return (
        <section className="py-10" id="off">
            <EyebrowLine label="09 · Off the clock" />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-1.5">
                Gym, bikes, and a song I&apos;ve worn out this month.
            </p>

            <div className="grid grid-cols-1 gap-3 mt-3.5">
                <a
                    href={track.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 p-3 border border-rule-subtle rounded-lg bg-bg-elevated hover:border-rule transition-colors"
                >
                    <AlbumArt track={track} />
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <span className="text-[13px] text-fg truncate">{track.name}</span>
                        <span className="text-xs text-fg-muted truncate">
                            {track.artist} · {track.album}
                        </span>
                        <span className="flex justify-between items-center font-mono text-[10.5px] text-fg-subtle mt-0.5 gap-2">
                            <span>Most replayed this month</span>
                            <span className="inline-flex items-center gap-1 text-fg-muted flex-none">
                                <Bars />
                                Spotify
                            </span>
                        </span>
                    </div>
                </a>
            </div>
        </section>
    );
}
