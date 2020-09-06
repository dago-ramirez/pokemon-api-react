import React from 'react'
import PokemonCard from './card/PokemonCard';

export default function PokemonList({pokemon}) {    
  return (
    <div >      
        <PokemonCard pokemon={pokemon} />      
    </div>
  );
}