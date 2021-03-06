import React, { Component } from 'react'
// import PokemonCard from '../card/PokemonCard';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {props}
    }

    toggleModalActive() {      
        document.querySelector('.modal').classList.add('is-active');
    }

    toggleModalDeactive() {       
        document.querySelector('.modal').classList.remove('is-active');
    }
 
    render() {

        return (
            <div className="columns is-mobile is-centered">
                <div className="column is-3 level">
                    {/* <div className="level-left is-one-third">
                        <span className="tag is-large has-text-weight-bold">Buscar por nombre</span>
                    </div> */}
                    <div className="field has-addons level-right is-two-thirds">
                        <div className="control">
                            <input className="input" type="text" placeholder="Buscar por nombre"/>
                        </div>
                        <div className="control mb-3">
                            <button className="button is-info" onClick={this.toggleModalActive}>Buscar</button>
                        </div>
                    </div>
                </div>
                <div className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">                            
                            <p className="modal-card-title">Modal title</p>
                            <button className="delete" aria-label="close" onClick={this.toggleModalDeactive}></button>
                        </header>
                        <section className="modal-card-body">
                            {/* <PokemonCard pokemon={this.props.pokemon.pokemon[0]}/> */}
                            <p>Content ...</p>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-info" onClick={this.toggleModalDeactive}>Close</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }   
}