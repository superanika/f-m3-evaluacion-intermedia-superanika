import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';

class Pokemon extends React.Component {
    render () {
        return (
            <div className={this.props.favorite ? 'card fav' : 'card'}>
              <span className="star" role= "img" aria-label="favorite">⭐️</span>
              <img src={this.props.url} alt={this.props.name} className="poke_image"/>
              <div className="info">
                <h2 className="poke_name">{this.props.name}</h2>
                <ul className="types">
                    {this.props.types.map((item, index) => (<li className="types_item" key={index}>{item}</li>))}
                </ul>
              </div>
            </div>
        );
    }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array
}
export default Pokemon;