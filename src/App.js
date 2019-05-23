import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import pokemon from './components/Data';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemonList: pokemon
    } 
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite (event) {
    const id = parseInt(event.currentTarget.id);
    let pokemonList = [...this.state.pokemonList];
    for (const item of pokemonList) {
      if (item.id === id){
        item.favorite = !item.favorite ;
      }
    }
    this.setState ({
      pokemonList: pokemonList
    });
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
                addFavorite = {this.handleFavorite}
                />
      </main>
        
      </div>
    );
  }
}

export default App;
