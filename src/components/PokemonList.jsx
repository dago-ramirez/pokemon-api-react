import React, { Component } from 'react'
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeInfo : [],
            pokeDetails : []
        }
    }

    componentDidMount() {
        this.getMorePokemon();
    }

    getMorePokemon() {
        // let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({pokeInfo : data.results}, () => {
              this.state.pokeInfo.map(pokemon => {
                fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                  if (data) {
                    var temp = this.state.pokeDetails
                    temp.push(data)
                    this.setState({pokeDetails: temp})
                  }            
                })
                .catch(console.log)
              })
            })        
          }
        })
        .catch(console.log)
      }
    
      render() {
        const {pokeDetails} = this.state;
    
        const pokemonList = pokeDetails.map((pokemon, index) => {
          return (<PokemonCard pokemon={pokemon} key={index}/>);
        });
    
        return (
          <div className="container">
            <div className="card">
              {pokemonList}
            </div>
          </div>
        );
      }
}