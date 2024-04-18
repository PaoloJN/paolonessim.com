"use client"

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import Map from "react-map-gl"

import { cn } from "@/lib/utils"

interface LocationProps {
  className?: string
}

export default function Location({ className, ...props }: LocationProps) {
  const [visibility, setVisibility] = React.useState({
    water: true,
    parks: true,
    buildings: true,
    roads: true,
    labels: false, // Set labels to false to hide them by default
    background: true,
  })

  return (
    <Card className={cn("relative", className)} {...props}>
      <div className="absolute z-20 w-full">
        <div className=" w-full flex justify-between p-2.5 pb-2 ">
          <CardTitle>Location</CardTitle>
          <CardDescription>Maryland, USA</CardDescription>
        </div>
        <div className="mx-2.5 border-b border-solid border-black border-opacity-15" />
      </div>

      <CardContent className="absolute p-0 top-0 h-full w-full">
        <Image
          src="https://framerusercontent.com/images/VUFpyNfHahYo4OtUEXPg5ABhLbI.jpg?scale-down-to=512"
          alt="Picture of the author"
          className="w-full h-full rounded-[10px]"
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
