import React from 'react'
import PokeTypes from './PokeTypes'

export default function CardContent({pokemon}) {
    return (
        <div className="card-content">
            <div className="media">                    
                <div className="media-content">
                    <p className=""><b>ID:</b> {pokemon.id}</p>
                </div>
                <div className="media-content m-0">                   
                    <b>Type:</b>                        
                </div>
                <div className="media-content m-0">                   
                    <PokeTypes pokemon={pokemon} />                        
                </div>
            </div>
        </div>
    )
}
