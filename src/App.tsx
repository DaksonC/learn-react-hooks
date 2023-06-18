import logo from './assets/logo.svg';
import code from './assets/code.png';
import './App.css';
import { LearnUseState } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="#learn-useState"
        >
          Learn useState
        </a>
      </header>
      <div className="hooks" id="learn-useState">
        <LearnUseState />
        <img src={code} className="code-image" alt="code" />
      </div>
    </div>
  );
}

export default App;
