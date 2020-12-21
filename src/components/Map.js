import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { useCurrentLocation } from '../lib/userLocation';

const API_KEY = 'AIzaSyAs_fPF3j1pcQYUU2s0WMI27zhV7oe8kks';

export function Map() {
  const { location, error } = useCurrentLocation();
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {error && <p>Location Error: {error}</p>}
      {location && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location}
          defaultZoom={zoom}
        />
      )}
    </div>
  );
}
