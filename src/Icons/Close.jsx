export default function Close({ size = 24, stroke = 2 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
}
