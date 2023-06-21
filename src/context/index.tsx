import {
  ReactNode,
  createContext,
  useState
} from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext =
  createContext<ThemeContextType>({} as ThemeContextType);

const ThemeContextProvider =
  ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

export default ThemeContextProvider;

// Aqui o Contexto é criado, para ser utilizado.