import React from 'react';


class Pokemon extends React.Component {
    render () {
        return (
            <div className="card">
              <img src={this.props.url} alt="" className="poke_imgage"/>
                <h2 className="poke_name">{this.props.name}</h2>
                <ul className="types">
                  {this.props.types.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        );
    }
}

export default Pokemon;