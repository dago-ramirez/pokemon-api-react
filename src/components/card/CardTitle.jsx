import React from 'react'

export default function CardTitle({pokemon}) {
    return (
        <div className="card-content has-background-grey-lighter">
            <div className="media">                    
                <div className="media-content has-text-centered">
                    <p className="title is-4">{pokemon.name}</p>
                </div>
            </div>
        </div> 
    )
}
