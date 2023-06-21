import { useContext } from "react";
import { ThemeContext } from "../context";

export function LearnUseContext() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>useContext</h1>
      <div
        style={{
          backgroundColor:
            theme === "dark" ? "#333" : "#CCC",
          color:
            theme === "dark" ? "#CCC" : "#333",
          padding: 20,
          borderRadius: 10,
          width: 200,
          height: 100,
        }}
      >
        <h4>Current theme: {theme}</h4>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}

// O useContext é utilizado para acessar o Contexto criado.