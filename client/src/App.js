import React from 'react';
import './styles/App.css';
import logo from './assets/logo.png';
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
