import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
    title?: string;
};

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const parameters: Parameters = Object.fromEntries(searchParams);
        const { title } = parameters;

        const [interRegular, interMedium] = await Promise.all([
            fetch(new URL("/public/fonts/inter/regular.ttf", import.meta.url)).then((res) =>
                res.arrayBuffer(),
            ),
            fetch(new URL("/public/fonts/inter/medium.ttf", import.meta.url)).then((res) =>
                res.arrayBuffer(),
            ),
        ]);

        return new ImageResponse(
            (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "60px 72px",
                        background: "#0E0E0C",
                        fontFamily: "Inter",
                        color: "#FAFAF7",
                    }}
                >
                    {/* top row — meta */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: 18,
                            color: "rgba(250, 250, 247, 0.55)",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                            <span>EST. 2023</span>
                            <span style={{ color: "rgba(250, 250, 247, 0.3)" }}>·</span>
                            <span>v1.0</span>
                        </div>
                        <div>paolonessim.com</div>
                    </div>

                    {/* main */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "baseline",
                                fontSize: 120,
                                fontStyle: "italic",
                                fontFamily: "Georgia, serif",
                                lineHeight: 1,
                                letterSpacing: "-0.04em",
                                color: "#FAFAF7",
                            }}
                        >
                            {title ? title : "Paolo Nessim"}
                            <span
                                style={{
                                    color: "#E36B47",
                                    fontStyle: "normal",
                                    marginLeft: 4,
                                }}
                            >
                                .
                            </span>
                        </div>
                        <div
                            style={{
                                fontSize: 26,
                                lineHeight: 1.4,
                                color: "rgba(250, 250, 247, 0.7)",
                                maxWidth: 880,
                                letterSpacing: "-0.005em",
                            }}
                        >
                            Computer engineer building real-time systems that blend software, data,
                            and hardware.
                        </div>
                    </div>

                    {/* bottom row */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: 18,
                            color: "rgba(250, 250, 247, 0.45)",
                            letterSpacing: "0.02em",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <span
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 999,
                                    background: "#E36B47",
                                    display: "block",
                                }}
                            />
                            <span>College Park, MD</span>
                        </div>
                        <div>github.com/paolojn</div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 600,
                fonts: [
                    { name: "Inter", data: interRegular, weight: 400 },
                    { name: "Inter", data: interMedium, weight: 500 },
                ],
            },
        );
    } catch {
        return new Response("Failed to generate the image", {
            status: 500,
        });
    }
}
