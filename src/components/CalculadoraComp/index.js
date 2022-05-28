import React, { useState } from 'react'
import Display from '../Display'
import Button from '../Button'
import InputValue from '../InputValue'

function CalculadoraComp() {
    const [resultado, setResultado] = useState(0)
    const [valorAtual, setValorAtual] = useState(0)

    function soma() {
        setResultado(resultado + parseInt(valorAtual))
    }

    return (
        <>
        <Display valor={resultado} />
        <InputValue valor={valorAtual} change={setValorAtual} />
        <Button texto="+" click={soma} />
        </>
    )

}

export default CalculadoraComp