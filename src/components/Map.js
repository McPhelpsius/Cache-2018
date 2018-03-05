import React from 'react';
import styled from 'styled-components';
import { Map, InfoWindow, Marker } from 'google-maps-react';

const MapTarget = styled(Map)`
  max-height: 500px;
  background-color: #ddd;
  border-color: #aaa;
  border-width: 1px;
`;

const MapComponent = ({ google, currentDestination, onMarkerClick }) => {
  return (
    <MapTarget
      google={google}
      id="map"
      initialCenter={currentDestination.drive}
    />
  );
};

export default MapComponent;
