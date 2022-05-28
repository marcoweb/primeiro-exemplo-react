import React, { useContext } from "react";

function ExemploContext() {
    const contexto = useContext(valor)
    return (
        <h1>{contexto}</h1>
    )
}

export default ExemploContext