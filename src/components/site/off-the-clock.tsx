import EyebrowLine from "./eyebrow";

// NOTE: this is a new section so the content is still being worked on, but the idea is to have a more personal section about what I do outside of work and school .. music, hobbies, etc
export default function OffTheClock() {
    return (
        <section className="block" id="off">
            <EyebrowLine label="09 · Off the clock" />
            <p className="lede" style={{ margin: "0 0 6px" }}>
                Music, working out, and riding my bike around the DMV.
            </p>

            <div className="now-row">
                <div className="now-card">
                    <div className="cover" aria-hidden>
                        Kid A
                    </div>
                    <div className="info">
                        <span className="t">Everything In Its Right Place</span>
                        <span className="a">Radiohead · Kid A</span>
                        <span className="footer">
                            <span>Most replayed this month</span>
                            <span className="link">
                                <span className="bars" aria-hidden>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                Spotify
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
