import React from 'react';
import './App.css';

// components
import Map from './components/map';

// mapbox styles
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}

export default App;
