import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>hello world {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => count > 0 && setCount(count - 1)}
        disabled={count <= 0}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
