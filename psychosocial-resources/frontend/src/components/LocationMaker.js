import React, { useState } from 'react';
import {Marker, Popup, useMapEvents} from 'react-leaflet';
import L from "leaflet";

const icon = L.icon({
    iconUrl: require("../img/my-icon-location.png"),
    iconRetinaUrl: require("../img/my-icon-location.png"),
    iconSize: [30, 30],
});

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  export default LocationMarker;