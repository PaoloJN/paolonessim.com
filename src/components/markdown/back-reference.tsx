"use client";

interface Props extends React.HTMLProps<HTMLDivElement> {
    href: string;
}

export default function FootnoteBackReference({ href, children }: Props): JSX.Element {
    const scroll = () => {
        const footnote = document.querySelector(`[id="${href.replace("ref", "")}"]`);

        if (footnote) {
            const headerOffset = 100;
            const elementPosition = footnote.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <button
            id={href}
            type="button"
            onClick={(e) => {
                e.preventDefault();
                scroll();
            }}
            onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scroll();
                }
            }}
            className="footnote-back-reference"
        >
            {children}
        </button>
    );
}
