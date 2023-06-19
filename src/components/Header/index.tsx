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
        >
          Learn useState
        </a>
        <a
          className="App-link"
          href="#learn-useEffect"
        >
          Learn useEffect
        </a>
      </div>
    </nav>
  );
}