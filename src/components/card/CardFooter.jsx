import React from 'react'
import PokeTypes from './PokeTypes'

export default function CardFooter({pokemon}) {
    return (
        <footer className="card-footer">
            <div className="card-footer-item">
                <span>
                    <b>ID:</b> {pokemon.id}
                </span>
            </div>
            <div className="card-footer-item">
                <span>
                    <b>Types:</b> <PokeTypes pokemon={pokemon} /> 
                </span>
            </div>
        </footer> 
    )
}
