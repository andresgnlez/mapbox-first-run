import React, { PureComponent } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';

class Map extends PureComponent {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 36.72016,
      longitude: -4.42034,
      zoom: 8,
    }
  }

  handleViewportChange = (viewport) => { this.setState({ viewport }) }

  render() {
    return (
      <div className="c-map">
        <ReactMapGL 
          {...this.state.viewport}
          onViewportChange={this.handleViewportChange}
          mapStyle="mapbox://styles/andres-gnlez/cjw29dbyv11dn1dquxth2e8wq"
        >
          {/* <div className="c-navigation-control">
            <NavigationControl 
              onViewportChange={this.handleViewportChange}
              captureDoubleClick={false}
              captureClick={false}
            />
          </div> */}
        </ReactMapGL>
      </div>
    )
  }
}

export default Map;
