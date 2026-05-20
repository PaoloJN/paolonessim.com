import { experience } from "@/content/experience";
import EyebrowLine from "./eyebrow";

export default function Experience() {
    return (
        <section className="py-10" id="xp">
            <EyebrowLine label="03 · Experience" />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[18px]">
                A bit of research, a bit of mission engineering, a few years of paid client work.
            </p>

            <div className="flex flex-col">
                {experience.map((r) => (
                    <div
                        className="grid grid-cols-[132px_1fr] max-[580px]:grid-cols-1 gap-x-5 max-[580px]:gap-x-0 max-[580px]:gap-y-1 py-[14px] border-t border-dashed border-rule-subtle first:border-t-0 first:pt-1 items-baseline"
                        key={r.title + r.when}
                    >
                        <div className="font-mono text-[11px] text-fg-subtle tracking-[0.02em] whitespace-nowrap pt-0.5">
                            {r.when}
                        </div>
                        <div>
                            <h4 className="m-0 mb-0.5 text-sm font-medium tracking-[-0.01em] text-fg">
                                {r.title}{" "}
                                <span className="text-fg-muted font-normal">
                                    at{" "}
                                    <b className="text-fg font-medium border-b border-dotted border-rule-strong">
                                        {r.org}
                                    </b>
                                    {r.orgSuffix}
                                </span>
                            </h4>
                            <p className="mt-1 mb-0 text-fg-muted text-[12.5px] leading-[1.5]">
                                {r.body}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
