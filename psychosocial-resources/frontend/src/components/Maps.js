import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocationMarker from './LocationMaker';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const icon = L.icon({
    iconUrl: require("../img/icon-location.png"),
    iconRetinaUrl: require("../img/icon-location.png"),
    iconSize: [30, 30],
});

const Maps = () => {

    const [info, setInfo] = useState([]);
    const infoId = useParams();
    const backend_url = process.env.REACT_APP_URL_BACKEND ?? 'http://localhost:5001';
    
    useEffect(() => {
        fetch(`${backend_url}/getHelp/${infoId.id}`)
        .then((result) => result.json())
        .then((data) => {
          setInfo(data);
        });
    }, []);
    return (
        info.map( (item) => {
            return item.latitud && item.longitud != null ?
                info.map((item) => {
                    return (
                        <>
                            <MapContainer center={[item.latitud, item.longitud]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[item.latitud, item.longitud]} icon={icon}>
                                    <Popup>
                                        {item.company}
                                        <br/>
                                        {item.address}
                                        <br/>
                                        {item.provincie}-{item.country}
                                        <br/>
                                        {item.phone}
                                        <br/>
                                        <a target="_blank" href={item.url_basic}>{item.url_basic}</a>
                                        <br/>
                                        Email: {item.email}
                                    </Popup>
                                </Marker>
                                <LocationMarker />
                            </MapContainer>
                            <p>Click the map to show a marker at your detected location</p>
                        </>
                    );
                }) : (<h1>ONLINE</h1>);
        })
)}; 

export default Maps;