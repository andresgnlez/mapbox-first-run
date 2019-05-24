import React from 'react';
import { MapController } from 'react-map-gl';

class ZoomControl extends MapController {
  render() {
    return(
      <div className="c-zoom-controls">
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default ZoomControl;