import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react'

class GoogleMap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    )
  }
}

export default GoogleMap;



