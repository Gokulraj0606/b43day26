import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Hooks />

    </div>
  );
}

function Hooks() {
  const [state, setState] = useState(0)

  useEffect(() => { }, [])

  return (
    <div> {state}
      <button onClick={() => { setState(state + 1) }}> +CLICK</button>

    </div>
  )
}



export default App;
