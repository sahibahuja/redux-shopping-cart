import React from 'react';
import './App.css';
import HomeContainer from './container/HomeContainer';
import HeaderContainer from './container/HeaderContainer';

function App() {
  return (
    <div className="App">
        <h1>Console Shop</h1>
        <HeaderContainer/>
        <HomeContainer/>

    </div>
  );
}

export default App;
