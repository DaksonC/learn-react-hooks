import { useEffect, useState } from "react";

interface IItem {
  name: string;
}

export function LearnUseEffect() {
  const [items, setItems] = useState<IItem[]>([]);
  const [resourceType, setResourceType] = useState('');

  function changeResourceType(resourceType: IItem['name']) {
    setResourceType(resourceType);
  };

  // O useEffect é executado toda vez que o componente é renderizado
  useEffect(() => {
    const fetchResource = async () => {
      if (!resourceType) return; // Se o resourceType for vazio, não faz nada

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );

      const data = await response.json();

      setItems(data);
    };

    fetchResource();
  }, [resourceType]); // Aqui é passado um array de dependências, ou seja, o useEffect só será executado quando o valor de resourceType for alterado

  return (
    <div>
      <h1>useEffect</h1>
      <button
        onClick={() => changeResourceType('users')}
      >
        Users
      </button>
      <h2>{resourceType}</h2>

      {items.map((item, index) => {
        return <pre key={index}>{item.name}</pre>;
      })}
    </div>
  );
}