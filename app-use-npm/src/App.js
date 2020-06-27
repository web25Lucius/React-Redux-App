import React from 'react';
import FunIdeas from './components/ideas'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Time is short. </h1>
       <p>There is always something to do.<br />
       What will you make out of today?</p>
       <FunIdeas />
      </header>
    </div>
  );
}

export default App;
