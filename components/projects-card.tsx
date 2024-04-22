"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"

interface ProjectsProps {
  className?: string
}

// create a suspense component that will show a loading spinner while the data is being fetched

export default function Projects({ className, ...props }: ProjectsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 p-3 mt-auto overflow-scroll">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </CardContent>
    </Card>
  )
}

// Add on hover show image and track mouse with image if in mouse is in element
function ProjectItem() {
  return (
    <div className="flex flex-row items-center rounded-md border-[0.5px] p-2 select-none">
      <Image
        alt="app-logo"
        src="/logo-light.jpeg"
        width={45}
        height={45}
        className="rounded-sm"
      />
      <div className="flex flex-col ml-[15px] mr-[5px] w-full">
        <div className="flex flex-row justify-between">
          <span>Weather AI</span>
          {/* <span className="text-[11.5px]">2023</span> */}
        </div>
        <p className="mt-1 leading-[18px] opacity-50">
          Real time weather chat ai application
        </p>
      </div>
    </div>
  )
}
