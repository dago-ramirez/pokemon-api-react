import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App container">
      <Header />
      <PokemonList />
    </div>
  );
}

export default App;
