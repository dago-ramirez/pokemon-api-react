import React from 'react';
import HeaderImage from './header/HeaderImage'
import HeaderSerch from './header/HeaderSerch';

export default function Header({pokemon}) {
    return (
        <div>
            <HeaderImage />
            <HeaderSerch pokemon={pokemon} />
        </div>
    )
}
