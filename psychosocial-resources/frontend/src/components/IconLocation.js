import L from "leaflet";

export const IconLocation = L.icon({
    iconUrl: require("../img/location-icon.png"),
    iconRetinaUrl: require("../img/location-icon.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30, 30],
    className: "leaflet-venue-icon",
});