"use client"

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export default function Location() {
  const [visibility, setVisibility] = React.useState({
    water: true,
    parks: true,
    buildings: true,
    roads: true,
    labels: false, // Set labels to false to hide them by default
    background: true,
  })

  return (
    <Card>
      <div className="flex justify-between p-2.5 pb-2">
        <CardTitle>Location</CardTitle>
        <CardDescription>Maryland, USA</CardDescription>
      </div>
      <CardContent className="p-0">
        <Image
          src="https://framerusercontent.com/images/VUFpyNfHahYo4OtUEXPg5ABhLbI.jpg?scale-down-to=512"
          alt="Picture of the author"
          className="w-full h-full opacity-50"
          width={100}
          height={100}
        />

        {/* <Map
          mapboxAccessToken="api"
          initialViewState={{
            longitude: -76.641273,
            latitude: 39.045753,
            zoom: 7,
          }}
          // hide labels
          
          style={{ width: "100%", height: "100%", borderRadius: "5rem" }}
          mapStyle="mapbox://styles/mapbox/light-v11"
        /> */}
      </CardContent>
    </Card>
  )
}
