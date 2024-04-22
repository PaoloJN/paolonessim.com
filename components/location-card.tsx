"use client";

import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface LocationProps {
  className?: string;
}

// image url  {/* https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-76.9413,39.1458,8.20,-0.2/512x512?access_token=pk.eyJ1IjoibWFwYm94LW1hcC1kZXNpZ24iLCJhIjoiY2syeHpiaHlrMDJvODNidDR5azU5NWcwdiJ9.x0uSqSWGXdoFKuHZC5Eo_Q */}

export default function Location({ className, ...props }: LocationProps) {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mapStyle =
    resolvedTheme === "dark"
      ? "/dark-map.png"
      : resolvedTheme === "light"
        ? "/light-map.png"
        : "";

  return (
    <Card className={cn("relative overflow-hidden", className)} {...props}>
      <div className="absolute z-20 w-full">
        <div className="flex w-full justify-between p-2.5 pb-2">
          <CardTitle>Location</CardTitle>
          <CardDescription>Maryland, USA</CardDescription>
        </div>
        <div className="mx-2.5 border-b border-solid border-black border-opacity-15" />
      </div>

      <div className="absolute -left-2 -top-2 h-[200px] w-[200px]">
        {mapStyle !== "" && isClient && (
          <Image
            src={mapStyle}
            alt="Picture of the author"
            // overlay black
            className="rounded-[10px] brightness-[1.02] filter dark:brightness-[0.6] dark:filter"
            width={200}
            height={200}
          />
        )}
      </div>
    </Card>
  );
}
