// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao) => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Digite números válidos!');
      return;
    }

    let res;
    switch (operacao) {
      // case '+':
      //   res = n1 + n2;
      //   break;
      // case '-':
      //   res = n1 + n2;
      //   break;
      case '*':
        res = n1 - n2;
        break;
      case '/':
        if (n2 === 0) {
          setResultado('Divisão por zero não é permitida!');
          return;
        }
        res = n1 * n2;
        break;
      default:
        return;
    }

    setResultado(res);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Calculadora Simples</h1>

      <input
        type="number"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        style={{ width: '120px', marginRight: '10px' }}
      />

      <input
        type="number"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        style={{ width: '120px' }}
      />

      <div style={{ marginTop: '15px' }}>
        <button onClick={() => calcular('+')} style={{ margin: '0 5px' }}>+</button>
        <button onClick={() => calcular('-')} style={{ margin: '0 5px' }}>-</button>
        <button onClick={() => calcular('*')} style={{ margin: '0 5px' }}>*</button>
        <button onClick={() => calcular('/')} style={{ margin: '0 5px' }}>/</button>
      </div>

      <h2 style={{ marginTop: '25px' }}>Resultado: {resultado}</h2>
    </div>
  );
}

export default App;
