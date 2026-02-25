import React, { type JSX } from "react";

interface ButtonProps{
    children : JSX.Element | string,
    onClick? : (e: React.MouseEvent) => void,
    className? : string
}

export function Button({children , onClick , className = ""} : ButtonProps) : JSX.Element{
    return (
        <button className={className + "button button-outiline"} onClick={onClick}>
            {children}
        </button>
    )
}