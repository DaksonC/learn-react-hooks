// Importação do useState
import { useState } from "react";

export function LearnUseState() {
  // Declaração do useState
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // Atualização do estado. Essa é a forma recomendada de atualizar o estado quando o novo valor depende do valor anterior.
    setCount((prevState) => prevState + 1);
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