import React from 'react';
import './App.css';
import logo from './logo.png';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <main>
      <img src={logo} />
      <RestaurantList />
    </main>
  );
}

export default App;
