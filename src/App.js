import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';


const names = ['Gustavo,', 'gerly', 'Cassandra',
 'Mido', 'Carri', 'Brad',
 ]


function App() {

  const [myName, setMyName] = useState('Corwin')
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         {myName} is pretty damn cool.
        </p>
{}

        <button onClick={() => setMyName('Jaques')}>Jaques</button>
        <br/>
        <button onClick={() => setMyName('Don')}>Don</button>
        <br/>
        <button onClick={() => setMyName('Corwin')}>Self</button>
        
        <p>You clicked the button {counter} times</p>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <br/>
        <button onClick={() => setCounter(0)}>Refresh</button>
      </header>
    </div>
  );
}

export default App;
