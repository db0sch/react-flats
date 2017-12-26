import React, { Component } from 'react';

class Marker extends Component {
  constructor(props) {
    super(props)
  }

  componentWillUpdate = () => {
    console.log("will update")
  }

  render() {
    return (
      <div className="marker"></div>
    )
  }
}

export default Marker;
