import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from '../components/Map';

export class MapContainer extends Component {
  state = {
    currentDestination: {
      name: 'Cave Spring',
      drive: { lat: 38.994870302481374, lng: -94.48349643498653 },
      walk: { lat: 38.99307085722472, lng: -94.4837968423962 },
      extra: { lat: 38.992703953997214, lng: -94.48306728154415 },
      friend: 'friend1',
      password: 'password1',
      personalPanelText: {
        transition:
          '<h4>This is a demo</h4><p>Press: <span class="pp-icon">&#xf0c9;</span> to see the driving directions<br>Press: <span>&#xf183;</span> when you have parked the car <br>Press: <span class="pp-icon">&#xf1ea;</span> to hide these instructions</p><p>Password: password1</p><p>Friend: friend1</p>'
      }
    },
    showingInfoWindow: false,
    activeMarker: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        currentDestination={this.state.currentDestination}
        onMarkerClick={this.onMarkerClick}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfu6GzIuASRBlIxT7IjczQYtlsoC_4uzo'
})(MapContainer);
