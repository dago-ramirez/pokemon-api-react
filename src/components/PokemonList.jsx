import React, { Component } from 'react'
import PokemonCard from './card/PokemonCard';

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
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({pokeInfo : data.results}, () => {
            // eslint-disable-next-line
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
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
              })
            })        
          }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
      }
    
      render() {
        const {pokeDetails} = this.state;
    
        const pokemonList = pokeDetails.map((pokemon, index) => {
          return (
          <PokemonCard pokemon={pokemon} key={index}/>
          
          );
        });
    
        return (
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered">
              {/* <Link to={`/card/${index}`}> */}
              {pokemonList}
              {/* </Link> */}
            </div>
          </div>
        );
      }
}