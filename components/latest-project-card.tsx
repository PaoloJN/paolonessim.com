"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

interface LatestProjectProps {
  className?: string;
}

export default function LatestProject({
  className,
  ...props
}: LatestProjectProps) {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const themeImage =
    resolvedTheme === "dark"
      ? "/dark-weather-ai.png"
      : resolvedTheme === "light"
        ? "/light-weather-ai.png"
        : "";

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Latest Project</CardTitle>
        <CardDescription className="flex flex-row">
          {/* Weather AI */}
          <ArrowTopRightIcon className="ml-2 h-4 w-4 opacity-50" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-5">
        <div>
          <span className="text-md">Weather AI - weather chat application</span>
          <p className="mt-2 opacity-50">
            Weather AI is a weather forecasting app that uses machine learning
          </p>
        </div>

        <div className="overflow-hidden">
          {themeImage !== "" && isClient && (
            <Image
              src={themeImage}
              alt="Picture of the author"
              className="h-full w-full rounded-md transition-transform duration-300 ease-in-out hover:scale-[1.02]"
              width={200}
              height={200}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
