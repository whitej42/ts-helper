import { useState } from "react";

function IconButton({ onClick, icon: Icon, text, baseColor, className }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-rail border cursor-pointer select-none text-sm font-semibold transition-colors duration-150 ${className ?? ''}`}
            style={{
                color:           hovered ? '#fff' : baseColor,
                borderColor:     baseColor,
                backgroundColor: hovered ? baseColor : 'transparent',
            }}
        >
            {Icon && <Icon />}
            <span>{text}</span>
        </div>
    );
}

export default IconButton;
