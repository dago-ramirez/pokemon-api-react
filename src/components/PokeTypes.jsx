import React from 'react'

export default function PokeTypes({pokemon}) {
    const listTypes = pokemon.types.map((type, index) =>  <li key={index}>{type.type.name}</li>)
    return (
        <ul>
            {listTypes}
        </ul>
    )
}
