"use client"

import About from "@/components/about-card"
import CV from "@/components/cv-card"
import ExperienceAndEducation from "@/components/experience-card"
import Projects from "@/components/projects-card"
import Location from "@/components/location-card"
import LatestProject from "@/components/latest-project-card"
import GetInTouch from "@/components/get-in-touch-card"
import Blog from "@/components/blog-card"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Personality from "@/components/personality-card"
import { useEffect, useState } from "react"

// TODO:
// Move in to separate components files and make server components
// finish all components
// make it responsive
// add more content
// edit content

// Animation

// https://github.com/cettoana/react-scramble (for text animation)
// keen-slider/react for carousel or wheel effect

// one step at a time

export default function Home() {
  return (
    <main className="relative mt-8 space-y-5">
      {/* <GithubGraph /> */}
      <div className="flex flex-row space-x-3">
        <About />
        <CV />
      </div>
      <ExperienceAndEducation />
      <Projects />

      <div className="flex flex-row space-x-3">
        {/* <Location /> */}
        <Personality />
        <LatestProject />
      </div>
      <GetInTouch />
      {/* <Stack />
      <Blog /> */}
    </main>
  )
}

function Building() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mt-5 leading-[20px] opacity-75"></p>
      </CardContent>
    </Card>
  )
}

function GithubGraph() {
  // prettier-ignore
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const startMonth = new Date().getMonth()
  const monthsRange = [...Array(13)].map(
    (_, i) => months[(startMonth + i) % 12]
  )

  const days: string[] = ["", "Mon", "", "Wed", "", "Fri", ""]
  const [squares, setSquares] = useState<number[]>([])

  useEffect(() => {
    // Create an array for the year, randomly assign 'levels' to each day
    const data: number[] = Array.from({ length: 369 }, () =>
      Math.floor(Math.random() * 4)
    )

    setSquares(data)
  }, [])

  // Function to determine the color based on the level
  const levelColor = (level: number): string => {
    switch (level) {
      case 1:
        return "bg-green-200"
      case 2:
        return "bg-green-400"
      case 3:
        return "bg-green-800"
      default:
        return ""
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Github Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="leading-[20px] opacity-75 overflow-y-scroll mt-2">
          <div className="inline-grid gap-2.5 p-2 pb-3">
            <div
              className="col-span-3 grid gap-1 text-center ml-5 mb-1"
              style={{
                gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
              }}
            >
              {monthsRange.map((month, index) => (
                <span key={month}>{month}</span>
              ))}
            </div>
            <div className="grid grid-rows-7 mr-1 ">
              {days.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            {/* auto-cols-[15px] */}
            <div className="grid grid-rows-7 grid-flow-col gap-[3px] ">
              {squares.map((level, index) => (
                <div
                  key={index}
                  className={`w-[12px] h-[12px] bg-gray-200 rounded-[2px] ${levelColor(
                    level
                  )} `}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Stack() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stack</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <div className="select-none relative flex h-full max-h-[17.1rem] flex-col justify-end overflow-hidden rounded-xl p-2">
          <div className="group/stack flex flex-row items-center gap-2">
            <img
              alt="Figma"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="h-10 w-10 scale-125 rounded-sm"
              src="https://disrtgdhxfyzrezaymsl.supabase.co/storage/v1/object/public/stack/figma.webp"
              // style="color: transparent;"
            />
            <div className="flex flex-col contrast-125 transition-transform duration-500 ease-in-out group-hover/stack:translate-x-2">
              <div className="text-base font-medium dark:text-neutral-400 dark:group-hover/stack:text-neutral-200">
                Figma
              </div>
              <div className="text-sm dark:text-neutral-500 dark:group-hover/stack:text-neutral-400">
                UI Design, prototyping
              </div>
            </div>
          </div>
          <div className="group/stack flex flex-row items-center gap-2">
            <img
              alt="Arc"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="h-10 w-10 scale-125 rounded-sm"
              src="https://disrtgdhxfyzrezaymsl.supabase.co/storage/v1/object/public/stack/arc.webp"
              // style="color: transparent;"
            />
            <div className="flex flex-col contrast-125 transition-transform duration-500 ease-in-out group-hover/stack:translate-x-2">
              <div className="text-base font-medium dark:text-neutral-400 dark:group-hover/stack:text-neutral-200">
                Arc
              </div>
              <div className="text-sm dark:text-neutral-500 dark:group-hover/stack:text-neutral-400">
                Browser of choice
              </div>
            </div>
          </div>
          <div className="group/stack flex flex-row items-center gap-2">
            <img
              alt="Raycast"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="h-10 w-10 scale-125 rounded-sm"
              src="https://disrtgdhxfyzrezaymsl.supabase.co/storage/v1/object/public/stack/raycast.webp"
              // style="color: transparent;"
            />
            <div className="flex flex-col contrast-125 transition-transform duration-500 ease-in-out group-hover/stack:translate-x-2">
              <div className="text-base font-medium dark:text-neutral-400 dark:group-hover/stack:text-neutral-200">
                Raycast
              </div>
              <div className="text-sm dark:text-neutral-500 dark:group-hover/stack:text-neutral-400">
                Supercharged launcher
              </div>
            </div>
          </div>
          <div className="group/stack flex flex-row items-center gap-2">
            <img
              alt="VS Code"
              loading="lazy"
              width="256"
              height="256"
              decoding="async"
              data-nimg="1"
              className="h-10 w-10 scale-125 rounded-sm"
              src="https://disrtgdhxfyzrezaymsl.supabase.co/storage/v1/object/public/stack/vscode.webp"
              // style="color: transparent;"
            />
            <div className="flex flex-col contrast-125 transition-transform duration-500 ease-in-out group-hover/stack:translate-x-2">
              <div className="text-base font-medium dark:text-neutral-400 dark:group-hover/stack:text-neutral-200">
                VS Code
              </div>
              <div className="text-sm dark:text-neutral-500 dark:group-hover/stack:text-neutral-400">
                IDE of choice
              </div>
            </div>
          </div>
        </div> */}
      </CardContent>
    </Card>
  )
}
