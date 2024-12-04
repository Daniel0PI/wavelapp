import React, { useState } from 'react';

export default function AutomataMicrosegundos() {
  const [input, setInput] = useState('');
  const [state, setState] = useState('q0'); // Estado inicial
  const [isValid, setIsValid] = useState(false);

  // Función que procesa la entrada
  const processInput = (input) => {
    let currentState = 'q0';

    for (let char of input) {
      if (currentState === 'q0') {
        if (/[0-9]/.test(char)) {
          currentState = 'q1';
        } else {
          currentState = 'qerr';
          break;
        }
      } else if (currentState === 'q1') {
        if (/[0-9]/.test(char)) {
          currentState = 'q1'; // Sigue en q1
        } else {
          currentState = 'qerr';
          break;
        }
      }
    }

    // Determinar estado final
    if (currentState === 'q1') {
      setState('qf'); // Estado final aceptado
      setIsValid(true);
    } else {
      setState(currentState);
      setIsValid(false);
    }
  };

  // Manejar el cambio en el input
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    processInput(value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h1>Autómata para microsegundos</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Ingresa una cadena"
        style={{ padding: 8, fontSize: 16 }}
      />
      <div style={{ marginTop: 20 }}>
        <h3>Estado actual: {state}</h3>
        {isValid ? (
          <p style={{ color: 'green' }}>✔ Cadena válida</p>
        ) : (
          <p style={{ color: 'red' }}>✘ Cadena inválida</p>
        )}
      </div>
    </div>
  );
}
