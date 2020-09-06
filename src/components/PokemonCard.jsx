import React from 'react'
import PokeTypes from './PokeTypes'

export default function PokemonCard({pokemon}) {
    return (
        <div className="column is-one-quarter is-narrow">
            <div className="card">
                <div className="card-content has-background-grey-lighter">
                    <div className="media">                    
                        <div className="media-content has-text-centered">
                            <p className="title is-4">{pokemon.name}</p>
                        </div>
                    </div>
                </div>  
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon"/>
                    </figure>
                </div>
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
            </div>
        </div>
    )
}
