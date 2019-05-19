import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import pokemon from './components/data';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemonList: pokemon
    } 
    
  }

  render () {
    
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Mi lista de Pokemon</h1>
        </header>
      <main className="main">
                <PokeList 
                pokemon ={this.state.pokemonList}
                />
      </main>
        
      </div>
    );
  }
}

export default App;
