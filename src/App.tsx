import {
  Header,
  LearnUseEffect,
  LearnUseReducer,
  LearnUseRef,
  LearnUseState
} from './components';
import logo from './assets/logo.svg';
import useRefCode from './assets/code-use-ref.png';
import useStateCode from './assets/code-use-state.png';
import useEffectCode from './assets/code-use-effect.png';
import useReducerCode from './assets/code-use-reducer.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header" id="header">
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
      </header>
      <div className="hooks" id="learn-useState">
        <LearnUseState />
        <img src={useStateCode} className="code-image-use-state" alt="code" />
      </div>
      <div className="hooks" id="learn-useEffect">
        <LearnUseEffect />
        <img src={useEffectCode} className="code-image-use-effect" alt="code" />
      </div>
      <div className="hooks" id="learn-useRef">
        <LearnUseRef />
        <img src={useRefCode} className="code-image-use-ref" alt="code" />
      </div>
      <div className="hooks" id="learn-useReducer">
        <LearnUseReducer />
        <img src={useReducerCode} className="code-image-use-reducer" alt="code" />
      </div>
    </div>
  );
}

export default App;
