import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat:37.541290 , lng: -77.434769 } }
        defaultZoom = { 8 }
      >
      </GoogleMap>
   ));
   return(
      <div>
       <iframe
          width="600"
          height="600"
          frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDlZ4dF4fcNeM89PdX-GjBzTqtSb4BK6-s&q=Richmond+VA">
        </iframe>
        />
      </div>
   );
  }
};
export default Map;