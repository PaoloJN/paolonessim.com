type Props = {
    label: string;
    count?: string;
};

export default function EyebrowLine({ label, count }: Props) {
    return (
        <div className="eyebrow-line">
            <span className="eyebrow">{label}</span>
            <span className="line" />
            {count ? <span className="count">{count}</span> : null}
        </div>
    );
}
