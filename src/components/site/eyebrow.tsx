type Props = {
    label: string;
    count?: string;
};

export default function EyebrowLine({ label, count }: Props) {
    return (
        <div className="flex items-center gap-3 mb-[18px] flex-nowrap">
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-fg-subtle">
                {label}
            </span>
            <span className="flex-1 h-px bg-rule-subtle" />
            {count ? (
                <span className="font-mono text-[10.5px] text-fg-faint tracking-[0.06em] whitespace-nowrap">
                    {count}
                </span>
            ) : null}
        </div>
    );
}
