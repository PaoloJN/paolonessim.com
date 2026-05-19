import { experience } from "@/content/experience";
import EyebrowLine from "./eyebrow";

export default function Experience() {
    return (
        <section className="block" id="xp">
            <EyebrowLine label="03 · Experience" />
            <p className="lede" style={{ margin: "0 0 18px" }}>
                A bit of research, a bit of mission engineering, a few years of paid client work.
            </p>

            <div className="xp">
                {experience.map((r) => (
                    <div className="row" key={r.title + r.when}>
                        <div className="when">{r.when}</div>
                        <div className="what">
                            <h4>
                                {r.title}{" "}
                                <span className="at">
                                    at <b>{r.org}</b>
                                    {r.orgSuffix}
                                </span>
                            </h4>
                            <p>{r.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
