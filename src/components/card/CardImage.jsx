import React from 'react'

export default function CardImage({pokemon}) {
    return (
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon"/>
            </figure>
        </div>
    )
}
