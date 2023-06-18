import { useState } from "react"; // Importação do useState	

export function LearnUseState() {
  const [count, setCount] = useState(0); // Declaração do useState

  function handleIncrement() {
    setCount(count + 1); // Atualização do estado
  }

  return (
    <div>
      <h1>useState</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

// O useState é uma função que retorna um array com duas posições:
// A primeira posição é o valor do estado atual, e a segunda é uma função para atualizarmos esse valor.