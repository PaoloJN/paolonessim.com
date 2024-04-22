"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </CardContent>
    </Card>
  );
}

// Add on hover show image and track mouse with image if in mouse is in element
function ProjectItem() {
  return (
    <div className="flex select-none flex-row items-center rounded-md border-[0.5px] p-2">
      <Image
        alt="app-logo"
        src="/logo-light.jpeg"
        width={45}
        height={45}
        className="rounded-sm"
      />
      <div className="ml-[15px] mr-[5px] flex w-full flex-col">
        <div className="flex flex-row justify-between">
          <span>Weather AI</span>
          {/* <span className="text-[11.5px]">2023</span> */}
        </div>
        <p className="mt-1 leading-[18px] opacity-50">
          Real time weather chat ai application
        </p>
      </div>
    </div>
  );
}
