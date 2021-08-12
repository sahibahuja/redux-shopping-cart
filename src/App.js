import React from 'react';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
        <h1>Props</h1>
        <User data={{name:'Sahib ahuja',age:26}}/>
    </div>
  );
}

export default App;
