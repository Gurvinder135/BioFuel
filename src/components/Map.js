import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

function Map() {
  const defaultPosition = [30.150031, 76.889629];
  return (
    <div className="mapCont">
      <MapContainer className="map" center={defaultPosition} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={defaultPosition}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            {defaultPosition[0]} <br /> {defaultPosition[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
