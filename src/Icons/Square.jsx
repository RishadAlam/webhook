import React from "react";

export default function Square({ size = 24, stroke = 2 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            strokeWidth={stroke}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </svg>
    )
}
