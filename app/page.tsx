import About from "@/components/about-card";
import CV from "@/components/cv-card";
import ExperienceAndEducation from "@/components/experience-card";
import Projects from "@/components/projects-card";
import Location from "@/components/location-card";
import LatestProject from "@/components/latest-project-card";
import GetInTouch from "@/components/get-in-touch-card";
import Blog from "@/components/blog-card";
import GithubGraph from "@/components/github-graph-card";
import Personality from "@/components/personality-card";
import Chat from "@/components/chat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Currently from "@/components/currently-card";

// Animation

// https://github.com/cettoana/react-scramble (for text animation)
// keen-slider/react for carousel or wheel effect

export default function Home() {
  return (
    <div className="grid auto-rows-[165px] grid-cols-[repeat(6,minmax(1px,1fr))] grid-rows-[repeat(2,165px)] gap-[22px]">
      <Location />
      <Currently />
      <About className="col-span-2" />
      <ExperienceAndEducation className="col-span-2 row-span-2" />
      <Projects className="col-span-2 row-span-2" />
      <GetInTouch className="col-span-2 " />
      <LatestProject className="col-span-2 row-span-2" />
      <GithubGraph className="col-span-2" />
      <Personality className="col-span-2 " />
      <CV />
      <Chat />
    </div>
  );
}

interface PlaceholderProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

function Placeholder({ title, className, children }: PlaceholderProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
    </Card>
  );
}
