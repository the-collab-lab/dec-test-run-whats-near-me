import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = 'AIzaSyA_jF-TPUl8qTMZ3BKFTrFOolH9wR7NOz4';

export function Map({ lat, lng }) {
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </div>
  );
}
