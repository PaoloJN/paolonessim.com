"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoIcon } from "@radix-ui/react-icons";

import Image from "next/image";

interface ProjectsProps {
  className?: string;
}

// create a suspense component that will show a loading spinner while the data is being fetched

export default function Projects({ className, ...props }: ProjectsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="mt-auto space-y-2 overflow-scroll p-3">
        <ProjectItem
          title="Weather AI"
          description="A machine learning-powered weather forecasting app."
          image="/light-weather-ai.png"
        />
        <ProjectItem
          title="Interact AI Hub"
          description="A user-friendly interface for Open source AI model interaction."
          image="/dark-weather-ai.png"
        />
        <ProjectItem
          title="Video Chat AI"
          description="A Chrome extension for chatting with YouTube videos."
          image="/light-weather-ai.png"
        />
      </CardContent>
    </Card>
  );
}

interface ProjectItemProps {
  title: string;
  description: string;
}

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectItem({ title, description, image }: any) {
  const [showImage, setShowImage] = useState(false);
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const imageRef: any = useRef();

  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    setImagePos({ x, y });

    // gsap.to(imageRef.current, {
    //   x: x,
    //   y: y,
    //   duration: 0, // Quick transition to make the movement smooth and responsive
    //   ease: "none", // Use linear easing for consistent movement
    // });
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  return (
    <div
      className=" flex cursor-pointer select-none flex-row items-start space-x-[5px] rounded-md border-[0.5px] px-4 py-3"
      // onMouseMove={handleMouseMove}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-full flex-col">
        <div className="flex flex-row justify-between">
          <span>{title}</span>
        </div>
        <p className="mt-1 leading-[18px] opacity-50">{description}</p>
      </div>
      <span className="text-[10.5px] opacity-50">2023</span>

      {/* {showImage && (
        <Image
          ref={imageRef}
          src={image}
          alt="app-logo"
          width={300}
          height={300}
          // ease-in opacity transition on hover
          className="rounded-sm"
          style={{
            position: "absolute",
            left: imagePos.x,
            top: imagePos.y,
            pointerEvents: "none", // Ensures the image does not interfere with mouse events
            zIndex: 1000,
          }}
        />
      )} */}
    </div>
  );
}

// // Add on hover show image and track mouse with image if in mouse is in element
// function ProjectItem({ title, description }: ProjectItemProps) {
//   return (
//     <div className="flex cursor-pointer select-none flex-row items-start space-x-[5px] rounded-md border-[0.5px] px-4 py-3">
//       {/* <Image
//         alt="app-logo"
//         src="/logo-light.jpeg"
//         width={45}
//         height={45}
//         className="rounded-sm"
//       /> */}

//       <div className="flex w-full flex-col">
//         <div className="flex flex-row justify-between">
//           <span>{title}</span>
//           {/* <span className="text-[11.5px]">2023</span> */}
//         </div>
//         <p className="mt-1 leading-[18px] opacity-50">{description}</p>
//       </div>
//       {/* <div className="rounded-sm border-[0.5px] border-black/15 p-2 dark:border-white/15"> */}
//       {/* <VideoIcon className="h-4 w-4 opacity-70" /> */}
//       <span className="text-[10.5px] opacity-50">2023</span>
//       {/* </div> */}
//     </div>
//   );
// }
