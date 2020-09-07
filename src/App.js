import Header from './components/Header';
import PokemonList from './components/PokemonList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pokemon from './components/Pokemon';


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
           <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={PokemonList}/>
            <Route path="/pokemon/:name" exact component={Pokemon}/>
          </Switch>
       </div>
      </div>
      </Router>
    )
  }
}


// function App() {
//   return (
//     // <Router>
//       <div className="App container">
//          <Header />
//          <PokemonList />
//       </div>
//     //   <Switch>
//     //     <Route path="/Habilidad" >
          
//     //     </Route>
//     //     <Route path="/" exact>
          
//     //     </Route>

//     //   </Switch>
//     // </Router>
    
//   );
// }

// export default App;
