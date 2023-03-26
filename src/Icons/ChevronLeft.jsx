import React from "react";

export default function ChevronLeft({ size = 24, stroke = 2 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            strokeWidth={stroke}
        >
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    );
}
