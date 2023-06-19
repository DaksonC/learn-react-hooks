import { useState } from "react";
import "./styles.css"

export function Header() {
  const [colorChange, setColorchange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      return setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <a href="/" className="logo">
        <h1>React Hooks</h1>
      </a>
      <button className={`hamburguer ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <a
          className="App-link"
          href="#learn-useState"
          onClick={toggleMenu}
        >
          Learn useState
        </a>
        <a
          className="App-link"
          href="#learn-useEffect"
          onClick={toggleMenu}
        >
          Learn useEffect
        </a>
        <a
          className="App-link"
          href="#learn-useRef"
          onClick={toggleMenu}
        >
          Learn useRef
        </a>
        <a
          className="App-link"
          href="#learn-useReducer"
          onClick={toggleMenu}
        >
          Learn useReducer
        </a>
        <a
          className="App-link"
          href="#learn-useContext"
          onClick={toggleMenu}
        >
          Learn useContext
        </a>
        <a
          className="App-link"
          href="#learn-useMemo"
          onClick={toggleMenu}
        >
          Learn useMemo
        </a>
        <a
          className="App-link"
          href="#learn-useCallback"
          onClick={toggleMenu}
        >
          Learn useCallback
        </a>
        <a
          className="App-link"
          href="#learn-useLayoutEffect"
          onClick={toggleMenu}
        >
          Learn useLayoutEffect
        </a>
      </div>
    </nav>
  );
}