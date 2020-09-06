import React from 'react'
import CardContent from './CardContent'
import CardTitle from './CardTitle'
import CardImage from './CardImage'

export default function PokemonCard({pokemon}) {
    return (
        <div className="column is-one-quarter is-narrow">
            <div className="card">                
                <CardTitle pokemon={pokemon} />                 
                <CardImage pokemon={pokemon} />         
                <CardContent pokemon={pokemon} />
            </div>
        </div>
    )
}
