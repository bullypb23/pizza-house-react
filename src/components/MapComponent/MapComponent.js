import React, { useState } from 'react';
import logo from '../../assets/images/logo2.png';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 48.137,
  lng: 11.576
};

const MapComponent = () => {
  const [info, setInfo] = useState(false);

  const toggleInfoWindow = () => {
    setInfo(!info);
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBF0x-n6xn04-hp12_ReBekHJcwWCkihUI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      <Marker 
        position={{ lat: 48.137, lng: 11.576 }} 
        onClick={toggleInfoWindow}
        icon={logo} />
      {info === true && (
        <InfoWindow position={{ lat: 48.1385, lng: 11.576 }} onCloseClick={toggleInfoWindow}>
          <div>
            <h2>Pizza House</h2>
            <p>Marienplatz 1, Munich</p>
          </div>
        </InfoWindow>
      )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;