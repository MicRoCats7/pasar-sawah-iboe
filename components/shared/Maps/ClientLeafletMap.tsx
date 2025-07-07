'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const position: [number, number] = [-7.1227613, 110.7742596];

export default function ClientLeafletMap() {
    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full rounded-md z-0"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Pemancingan dan <br /> W.M Pinggir Sawah Iboe
                </Popup>
            </Marker>
        </MapContainer>
    );
}