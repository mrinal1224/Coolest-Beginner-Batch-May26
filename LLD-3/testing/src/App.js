import logo from './logo.svg';
import './App.css';

function App() {
  let a = 2
  let b = 3

  return (
    <div className="App">
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Grapes</li>
          <li>Water Melon</li>
        </ul>
        <h1 data-testid='heading1'>I am Heading 1</h1>
        <span data-testid='span1' >{a+b}</span>
    </div>
  );
}

export default App;
