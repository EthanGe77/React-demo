import './App.css';
import { useState } from 'react';
import Controller from './components/controller';
import InputBox from './components/inputBox';
import Result from './components/result';

function App() {
  const [a, setA] = useState('0');
  const [b, setB] = useState('0');
  const [result, setResult] = useState('0');
  // setInput1('123') input1 will equal to '123'
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Calculator</h1>
        <InputBox value={a} setter={setA} />
        <Controller left={a} right={b} setResult={setResult} />
        <InputBox value={b} setter={setB} />
        <div className="equal">
          <div>=</div>
        </div>
        <Result result={result} />
      </div>
    </div>
  );
}

export default App;
