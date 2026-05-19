export default function Hero() {
    return (
        <section className="block loose hero">
            <h1 className="hero-name">
                Paolo
                <br />
                Nessim<span className="hero-period">.</span>
            </h1>

            <p className="hero-intro">
                I&apos;m a computer engineer in College Park. I like building things that touch the
                physical world — cameras, robots, satellites, the occasional Chrome extension.{" "}
                <span className="dim">
                    Right now I&apos;m doing computer-vision research at UMD and helping design a
                    NASA mission concept with the L&apos;SPACE academy.
                </span>
            </p>

            <p className="hero-meta">
                <span>CE @ UMD &apos;28</span>
                <span className="sep">·</span>
                <span className="avail-chip">
                    <span className="dot dot-on" aria-hidden /> open to roles for summer &apos;26
                </span>
            </p>

            <p className="hero-keys">
                <span className="grp">
                    <span>Press</span>
                    <kbd className="kbd">R</kbd>
                    <span>for résumé</span>
                </span>
                <span className="sep">·</span>
                <span className="grp">
                    <kbd className="kbd">⌘ + K</kbd>
                    {/* <kbd className="kbd">K</kbd> */}
                    <span>for everything</span>
                </span>
            </p>
        </section>
    );
}
