import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    event.preventDefault();
    const coords = {
      lng: this.props.attributes.lng,
      lat: this.props.attributes.lat
    }
    this.props.changeMarker(coords)
  }

  render() {

    const cardStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.attributes.imageUrl}')` }
    return (
      <div className="card" style={ cardStyle }>
        <div className="card-category">{`${this.props.attributes.price} ${this.props.attributes.priceCurrency}`}</div>
        <div className="card-description">
          <h2>{this.props.attributes.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )
  }
}

export default Flat;
