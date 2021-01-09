import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div color>{text}</div>;
const ComponentB = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.341846,
      lng: 25.148254
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCdB68ioVna9Y-IRSRCWZ9UzQ8CAolJXe0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.341846}
            lng={25.148254}
            text={"MARKER"}
          />
          <ComponentB
               lat={35.351846}
               lng={25.158254}
               text={"B-MARKER"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;