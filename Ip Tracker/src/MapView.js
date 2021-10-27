import React from 'react'
import Leaflet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from './images/icon-location.svg';

const MapView = ({ latLong }) => {

    const DefaultIcon = Leaflet.icon({
        iconUrl: icon,
        iconSize: [27, 40],
        popupAnchor: [0, -46]
    });

    const CenterView = ({ center }) => {
        const map = useMap()
        map.setView(center)
        return null
    }

    const position = Object.values(latLong)

    return (
        <MapContainer 
            center={position}
            zoom={11}
            style={{ height: "70vh", width: "100%", zIndex: "1", pointerEvents: "auto" }}
            scrollWheelZoom={true}
            zoomControl={false}
            zoomAnimation={true}
            touchZoom={"center"}
            >
                <CenterView center={position} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={DefaultIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
        </MapContainer>
    )
}

export default MapView