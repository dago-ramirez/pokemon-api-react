import React from 'react';
import HeaderImage from './header/HeaderImage'
import HeaderSearch from './header/HeaderSearch';

export default function Header({pokemon}) {
    // const info = pokemon.map(inf => console.log(inf));
    // console.log(pokemon[0]);
    return (
        <div>
            <HeaderImage />
            <HeaderSearch pokemon={pokemon} />
        </div>
    )
}
