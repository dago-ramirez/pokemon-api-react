import React from 'react'

export default function PokeTypes({pokemon}) {
    const listTypes = pokemon.types.map((type, index) =>  <span key={index}>{type.type.name} </span>)
    return (
        <p>
            {listTypes}
        </p>
    )
}