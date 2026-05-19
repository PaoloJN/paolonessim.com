import Clock from "./clock";
import { siteConfig } from "@/config/site";

export default function StatusBar() {
    return (
        <header className="statusbar">
            <div className="l">
                <span>EST. 2023</span>
                <span className="sep">·</span>
                <span>v2 · May &apos;26</span>
            </div>
            <div className="c">
                <span className="blink-dot" aria-hidden />
                <span>
                    <Clock tz={siteConfig.location.timezone} />
                </span>
                {/* <span className="caret" aria-hidden /> */}
            </div>
            <div className="r">
                {/* <span className="inline-flex items-center gap-2">
                    <span className="dot dot-on" /> 
                    Open to roles
                </span>
                <span className="sep">·</span> */}
                <span>{siteConfig.location.city}</span>
            </div>
        </header>
    );
}
