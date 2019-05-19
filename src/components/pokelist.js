import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="list">
               { this.props.pokemon.map(item=> {
                   return (
                        <li className="list_item" key={item.id} id={item.id}>
                        <Pokemon 
                            url = {item.url}
                            name = {item.name}
                            types = {item.types}
                        />
                        </li>
                   );
                    
                    }
               )
                }
            </ul>
        );
    }
}
export default PokeList;