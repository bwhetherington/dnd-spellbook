import React from "react";

const Button = (props) => (
    <button className="sbButton" type="button" onClick={props.onClick}>
        {props.children}
    </button>
);

export default Button;