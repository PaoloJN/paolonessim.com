"use client";

import { useState } from "react";
import { uses } from "@/content/uses";
import EyebrowLine from "./eyebrow";

const TABS = ["editor", "shell", "web", "vision", "hardware"] as const;
type Tab = (typeof TABS)[number];

export default function Stack() {
    const [active, setActive] = useState<Tab>("editor");
    const entries = uses[active];

    return (
        <section className="block" id="uses">
            <EyebrowLine label="06 · Stack & uses" />
            <p className="lede" style={{ margin: "0 0 18px" }}>
                What&apos;s on the laptop. Built up over a few years — mostly stable. I switch
                slowly and only when something is clearly better.
            </p>

            <div className="term">
                <div className="term-bar">
                    <span className="term-dots" aria-hidden>
                        <i />
                        <i />
                        <i />
                    </span>
                    <span className="term-title">paolo@dmv — zsh</span>
                    <span className="term-meta">81×24</span>
                </div>
                <div className="term-body">
                    <div className="term-line">
                        <span className="prompt">$</span>
                        <span>
                            paolo --uses <span className="arg">{active}</span>
                        </span>
                        <span className="caret" aria-hidden />
                    </div>
                    <div className="term-tabs" role="tablist">
                        {TABS.map((t) => (
                            <button
                                key={t}
                                className={`term-tab ${t === active ? "active" : ""}`}
                                type="button"
                                role="tab"
                                aria-selected={t === active}
                                onClick={() => setActive(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                    <pre className="term-out">
                        {entries.map((e) => (
                            <div key={e.key}>
                                <span className="k">{e.key.padEnd(12)}</span>
                                <span className="v">{e.value}</span>
                            </div>
                        ))}
                    </pre>
                </div>
            </div>
        </section>
    );
}
