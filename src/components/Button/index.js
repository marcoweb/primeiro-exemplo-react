import React from "react";

function Button(props) {
    return (
        <button type="button" onClick={props.click} >{props.texto}</button>
    )
}

export default Button