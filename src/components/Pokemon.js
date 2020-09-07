import React, { Component } from 'react'
import axios from 'axios';

export default class Pokemon extends Component {

state = {
    namePokemon: '',
    altura: '',
    peso: '',
    habilidad: '',
    imageUrl: '',
    evolucion: '',
    imgEvolucion: ''
}

async componentDidMount(){
    const { name } = this.props.match.params;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;

    const pokemonRes = await axios.get(pokemonSpeciesUrl);
    const evolucion = pokemonRes.data.evolves_from_species.name;
    this.setState({ evolucion });


    const pokemonResult = await axios.get(pokemonUrl);
    const namePokemon = pokemonResult.data.name;
    const altura = pokemonResult.data.height;
    const imageUrl = pokemonResult.data.sprites.other.dream_world.front_default;
    const peso = pokemonResult.data.weight;

    this.setState({ namePokemon })
    this.setState({ altura })
    this.setState({ imageUrl })
    this.setState({ peso })

}

    render() {
        return (
            <div>
                <h1>Nombre: {this.state.namePokemon}</h1>
                <div className="card-image">
                   <figure className="image is-4by3">
                       <img src={this.state.imageUrl} alt="Poke"/>
                   </figure>
                </div>
                <h1>Altura: {this.state.altura}</h1>
                <h1>Peso: {this.state.peso}</h1>
                <h1>evolucion de: {this.state.evolucion}</h1>
            </div>
        )
    }
}
