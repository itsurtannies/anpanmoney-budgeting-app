import React from "react";
import './Button.css';

const STYLES = [  
    "btn--primary--solid",
    "btn--warmomg--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warmomg--outline",
    "btn--danger--outline",
    "btn--success--outline",
    "btn--white--danger"
]
const SIZES = [
    "btn--medium",
    "btn--small"
]
export const Button = ({
    children,
    type,onClick,
    buttonStyle,
    buttonSize
    }) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0];
    return(
        <button className={ `btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
