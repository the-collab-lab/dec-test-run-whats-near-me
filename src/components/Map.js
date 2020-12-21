import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = 'AIzaSyAs_fPF3j1pcQYUU2s0WMI27zhV7oe8kks';

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
