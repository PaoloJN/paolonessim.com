import About from "@/components/about-card"
import CV from "@/components/cv-card"
import ExperienceAndEducation from "@/components/experience-card"
import Projects from "@/components/projects-card"
import Location from "@/components/location-card"
import LatestProject from "@/components/latest-project-card"
import GetInTouch from "@/components/get-in-touch-card"
import Blog from "@/components/blog-card"
import GithubGraph from "@/components/github-graph-card"
import Personality from "@/components/personality-card"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { useEffect, useState } from "react"

// import Clock from "react-clock"
// import "react-clock/dist/Clock.css"

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
  // const [value, setValue] = useState(new Date())

  // useEffect(() => {
  //   const interval = setInterval(() => setValue(new Date()), 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  return (
    <div className="grid gap-[22px] auto-rows-[165px] grid-cols-[repeat(6,minmax(1px,1fr))] grid-rows-[repeat(2,165px)]">
      <Location />
      <CV />
      <About className="col-span-2" />
      <ExperienceAndEducation className="col-span-2 row-span-2" />
      <Projects className="col-span-2 row-span-2" />
      <GetInTouch className="col-span-2 " />
      <LatestProject className="col-span-2 row-span-2" />
      <GithubGraph className="col-span-2" />
      <Placeholder title="Newsletter" />
      <Placeholder title="Spotify" />
      <Placeholder title="Mood" />
      <Placeholder title="Years" />

      {/* <ClockComponent title="Time">
        <Clock value={value} className="mx-auto my-3" />
      </ClockComponent> */}

      {/* <Personality className="col-span-2 row-span-2" /> */}

      {/* 
      <GithubGraph />
      <About />
      <CV />
      <ExperienceAndEducation />
      <Projects />
      <Location />
      <Personality />
      <LatestProject />
      <Chat />
      <GetInTouch />
      <Stack />
      <Blog /> 
      */}
    </div>
  )
}

interface PlaceholderProps {
  title: string
  className?: string
  children?: React.ReactNode
}

function Placeholder({ title, className, children }: PlaceholderProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
    </Card>
  )
}

function ClockComponent({ title, className, children }: PlaceholderProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
    </Card>
  )
}

function Chat() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat with my ai version</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mt-5 leading-[20px] opacity-75"></p>
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
