import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tes from './tes/Tes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      HELLO WORLD
      <Tes />
    </div>
  );
}

export default App;
