import './style.css'

function Contador(props) {
    return (
        <>
            <h1 className="Destaque">Contador: {props.valor}</h1>
            <button type="button" onClick={() => props.click()}>+</button>
        </ >
    )
}

export default Contador