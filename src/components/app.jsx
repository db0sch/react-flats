import React, { Component } from 'react';
import FlatList from './flat_list.jsx'
// import GoogleMap from './google_map.jsx'
import GoogleMapReact from 'google-map-react'
import Marker from './marker.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCoordinates: {
        lat: null,
        lng: null
      }
    }
  }

  changeMarker = (coord) => {
    this.setState({
      selectedCoordinates: coord,
    })
    console.log(this.state.selectedCoordinates)
  }

  renderGoogleMaps = () => {
    if (!this.state.selectedCoordinates.lat && !this.state.selectedCoordinates.lat) {
      return (
        <GoogleMapReact
          defaultCenter={this.props.defaultCoords}
          defaultZoom={this.props.defaultZoom}
          >
        </GoogleMapReact>
      )
    } else {
      return (
        <GoogleMapReact
          defaultCenter={this.props.defaultCoords}
          defaultZoom={this.props.defaultZoom}
          center={this.state.selectedCoordinates}
          >
          <Marker lat={this.state.selectedCoordinates.lat} lng={this.state.selectedCoordinates.lng} />
        </GoogleMapReact>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="flat-list">
            <FlatList markerFunction={this.changeMarker} />
          </div>
          <div className="map-container">
            { this.renderGoogleMaps() }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
