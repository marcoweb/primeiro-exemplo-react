import Ola from './components/Ola';
import Contador from './components/Contador';
import ContadorClass from './components/ContadorClass';
import Calculadora from './components/Calculadora';
import './App.css'
import { useEffect, useState } from 'react';
import CalculadoraComp from './components/CalculadoraComp';
import ExemploContext from './components/ExemploContext';

function App() {
  const [valor, setValor] = useState(0)
  const [alterado, setAlterado] = useState(0)

  function contar() {
    setValor(valor - 1)
  }

  useEffect(() => {
    setAlterado(alterado + 1)
    console.log('alterado : ' + alterado)
  },[valor])

  const Contexto = React.createContext('Teste')

  return (
    <Contexto.Provider>
      <div className='Container' >
        <Ola />
        <Contador valor={valor} click={contar}/>
        <ContadorClass />
        <Calculadora />
        <hr />
        <CalculadoraComp />
        <hr />

      </div>
    </Contexto.Provider>
  );
}

export default App;
