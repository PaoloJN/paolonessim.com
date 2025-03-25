"use client";

import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import Image from "next/image";

import "mapbox-gl/dist/mapbox-gl.css";

const dc_coordinates = {
    latitude: 38.8951,
    longitude: -77.0364,
};

export default function Location() {
    const [viewport] = useState({
        latitude: dc_coordinates.latitude,
        longitude: dc_coordinates.longitude,
        zoom: 6,
        pitch: 60,
    });

    return (
        <div className="relative w-full h-[160px] rounded-lg overflow-hidden border-[1px] border-border/40">
            <Map
                initialViewState={viewport}
                style={{ width: "100%", height: "125%" }}
                mapStyle="mapbox://styles/mapbox/dark-v8"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            >
                <Marker latitude={38.8977} longitude={-77.0365} anchor="center">
                    <div className="relative">
                        <div className="relative w-14 h-14">
                            <Image
                                src="/images/nyan-cat.gif"
                                alt="Nyan Cat"
                                width={56}
                                height={56}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </Marker>
            </Map>
            <div
                className="absolute inset-0 dark:bg-background/80 pointer-events-none"
                aria-hidden="true"
            />
        </div>
    );
}
