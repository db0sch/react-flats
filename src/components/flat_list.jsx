import React, { Component } from 'react';
import Flat from './flat.jsx'
import flats from './flats.js'

class FlatList extends Component {
  constructor(props) {
    super(props)
  }

  renderList = () => {
    return (
      flats.map((flat, index) => {
        return <Flat attributes={ flat } key={ index } changeMarker={ this.props.markerFunction }/>
      })
    )
  }

  render() {
    return (
      this.renderList()
    )
  }
}

export default FlatList;
