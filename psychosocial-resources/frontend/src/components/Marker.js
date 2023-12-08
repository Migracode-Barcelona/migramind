import React from "react";
import {Marker} from "react-leaflet";
import {IconLocation} from "./IconLocation"


const Markers = () => {
    return (
      <Marker position={{lat: '41.38584331967228', lng: '2.130119249487984'}} icon={IconLocation}/>
    )
}

export default Markers;
