import React from 'react'
import './Card.css'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import {Link} from 'react-router-dom'

export default function PokemonCard({pokemon}) {
    return (
        <Link to={`pokemon/${pokemon.name}`}>
        <div className="column is-narrow">
            <div className="card">                
                <CardHeader pokemon={pokemon} />                 
                <CardImage pokemon={pokemon} />         
                <CardFooter pokemon={pokemon} />
            </div>
        </div>
        </Link>
    )
}
