import React, { useState } from "react";

function Calculadora() {
    const [resultado, setResultado] = useState(0)
    const [valorAtual, setValorAtual] = useState(0)
    
    return (
        <div>
            <div>{resultado}</div>
            <input value={valorAtual} onChange={(e) => {setValorAtual(parseInt(e.target.value))}} type="number" />
            <button type="button" onClick={() => {setResultado(resultado + valorAtual)}}>+</button>
            <button type="button">-</button>
            <button type="button">*</button>
            <button type="button">/</button>
        </div>
    )
}

export default Calculadora