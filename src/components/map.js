import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MapComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom = {12}
    defaultCenter= {{ lat: 44.0609976, lng: -123.1949344 }}
  >

  {props.markers && props.markers.filter(marker => marker.visible).map((marker,index) => {
    return <Marker
    animation={marker.animation}
    key={index}
    position={{lat: marker.lat, lng: marker.lng}}
    onClick={() => {props.openInfoWin(marker)}}
    >

  {marker.opened && (
    <InfoWindow
    onCloseClick={() => {props.closeInfoWin(marker)}}
    >
    <div>
          <h1>{marker.name}</h1>
          {marker.photo ? <img alt={marker.name} src={marker.photo} /> : <p>free photo quota exceeded for today</p>}
          <h2>Photo Provided by FourSquare</h2>
        </div>
    </InfoWindow>)}
    </Marker>
  })}
  </GoogleMap>
))

class Map extends Component {

  render(){

    return < MapComponent
{...this.props}

  googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB6d-rKiOX-I58TO2ttbJX00N0NkaV_ZLs"
  loadingElement = {<div style={{ height: `100%` }} />}
  containerElement = {<div style={{ height: `100%` }} />}
  mapElement = {<div style={{ height: `100%` }} />}
/>
  }
}

export default Map;
