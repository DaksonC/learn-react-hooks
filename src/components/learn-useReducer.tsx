import { useReducer, useState } from 'react';

interface ITask {
  name: string;
  isCompleted: boolean;
}

type ActionTypes =
  | { type: "ADD-TASK"; payload: string }
  | { type: "TOGGLE-TASK"; payload: number }
  | { type: "DELETE-TASK"; payload: number };

function reducer(state: { tasks: ITask[]; }, action: ActionTypes) {
  switch (action.type) {
    case "ADD-TASK":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }]
      };
    case "TOGGLE-TASK":
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === action.payload) {
            return {
              ...task,
              isCompleted: !task.isCompleted
            };
          }
          return task;
        })
      };
    case "DELETE-TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload)
      };
    default:
      return state;
  }
}

export function LearnUseReducer() {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [initialValue, setInitialValue] = useState("");

  function initialValueChange(e: { target: { value: string; }; }) {
    setInitialValue(e.target.value);
  }

  function addTask() {
    dispatch({ type: "ADD-TASK", payload: initialValue });
    setInitialValue("");
  }

  function toggleTask(index: number) {
    dispatch({ type: "TOGGLE-TASK", payload: index });
  }

  function deleteTask(index: number) {
    dispatch({ type: "DELETE-TASK", payload: index });
  }

  return (
    <div>
      <h1>useReducer</h1>
      <input
        type="text"
        value={initialValue}
        onChange={initialValueChange}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask(index)}
            />
            <span>{task.name}</span>
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// O useReducer é um hook que serve para gerenciar estados complexos,
// ou seja, estados que possuem mais de uma propriedade. Ele é muito
// parecido com o useState, porém, ele é mais indicado para estados
// complexos, pois ele nos permite criar uma função que irá gerenciar
// o estado e essa função pode ser passada para outros componentes,
// assim como fizemos com o useState. Para utilizar o useReducer,
// precisamos passar uma função reducer e um estado inicial. A função
// reducer é uma função que recebe o estado atual e uma ação e retorna
// um novo estado. A ação é um objeto que possui uma propriedade type,
// que é uma string que representa o tipo da ação, e uma propriedade
// payload, que é o valor que será utilizado para atualizar o estado.
// A função reducer é muito parecida com a função que passamos para o
// useState, porém, ela é mais complexa, pois ela precisa lidar com
// todas as ações que podem ser disparadas no estado.