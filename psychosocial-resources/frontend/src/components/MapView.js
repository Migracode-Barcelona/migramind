import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Marker";


const MapView = () => {
    return <MapContainer center={{lat: '41.38584331967228', lng: '2.130119249487984'}} zoom={13}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            <Markers />
    </MapContainer>
}

export default MapView;
