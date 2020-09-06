import React from 'react'

export default function PokemonCard({pokemon}) {
    return (
        <div>     
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">                    
                    <div className="media-content">
                        <p className="title is-4">{pokemon.name}</p>
                    </div>
                </div>
                <div className="content">
                    <ul>

                    </ul>
                </div>
            </div>
        </div>
    )
}
