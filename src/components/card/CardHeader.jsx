import React from 'react'

export default function CardHeader({pokemon}) {
    return (
        <header className="card-header has-background-grey-lighter">
            <p className="card-header-title is-centered">
                {pokemon.name}
            </p>    
        </header>
    )
}