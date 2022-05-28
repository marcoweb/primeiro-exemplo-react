import React from "react";

function InputValue(props) {
    return (
        <input type='number' value={props.valor} onChange={(e) => {props.change(e.target.value)}} />
    )
}

export default InputValue