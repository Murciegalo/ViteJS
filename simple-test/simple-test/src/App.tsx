import { useState } from 'react';
import './App.css';
import SizeSelector from './components/SizeSelector';

function App() {
  const [currentSize, setCurrentSize] = useState('');

  return (
    <div className='App'>
      <h1 style={{ margin: '4rem' }}> Talla Seleccionada: {currentSize} </h1>
      <SizeSelector
        selectedSize={currentSize}
        onSizeChange={(size) => setCurrentSize(size)}
      />
    </div>
  );
}

export default App;
