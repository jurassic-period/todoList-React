import React from 'react';
import Todo from './components/Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='wrapperDiv'><Todo/></div>
      </header>
    </div>
  );
}

export default App;
