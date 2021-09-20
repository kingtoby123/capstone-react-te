import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (

        <div className="map-wrapper">

            <GoogleMapReact
            //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={44.9495681780075}
                lng={-123.0469071865082}
                text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
  }
}

export default SimpleMap;