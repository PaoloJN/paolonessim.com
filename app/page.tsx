import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="relative mt-8 space-y-5">
      <About />
      <ExperienceAndEducation />
      <Location />
      <SideProjects />
      <GetInTouch />
      <Blog />
      <CV />
      <Spotify />
      <LatestProject />
    </main>
  )
}

function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>Paolo Nessim</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <p className="mt-5 leading-4 ">
          Hello. I’m Isabella Clarke, a visionary Brand Founder hailing from the
          dynamic city of London. With a deep understanding of the power of
          branding, I am dedicated to creating compelling brand experiences that
          resonate with audiences and drive meaningful connections. Let’s embark
          on a transformative journey together.
        </p> */}
      </CardContent>
    </Card>
  )
}

function ExperienceAndEducation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Experience & Education</CardTitle>
        {/* <CardDescription>Paolo Nessim</CardDescription> */}
      </CardHeader>
      <CardContent>
        {/* Card content */}
        <div className="flex flex-col px-2.5 pt-2 w-full">
          <div className="flex gap-5 py-4 border-b-[0.5px] border-black/15">
            <div className="flex gap-1.5 self-start items-center  whitespace-nowrap opacity-50">
              <span>2022</span>
              <span className="w-4 border-[0.5px] border-black opacity-50" />
              <span>Now</span>
            </div>

            <div className="flex flex-col">
              <span>Creative Studio Owner</span>
              <p className="mt-1 leading-4 opacity-50">
                Self-employed at my own creative studio, delivering innovative
                design solutions and giving value to your brand experience.
              </p>
            </div>
          </div>
          {/* Two */}

          <div className="flex gap-5 py-4 border-b-[0.5px] border-black/15">
            <div className="flex gap-1.5 self-start items-center  whitespace-nowrap opacity-50">
              <span>2020</span>
              <span className="w-4 border-[0.5px] border-black opacity-50" />
              <span>2022</span>
            </div>

            <div className="flex flex-col">
              <span>Nike Headquarters</span>
              <p className="mt-1 leading-4 opacity-50">
                Designer & Creative Director
              </p>
            </div>
          </div>
          {/* Three */}
          <div className="flex gap-5 py-4 border-b-[0.5px] border-black/15">
            <div className="flex gap-1.5 self-start items-center  whitespace-nowrap opacity-50">
              <span>2018</span>
              <span className="w-4 border-[0.5px] border-black opacity-50" />
              <span>2020</span>
            </div>

            <div className="flex flex-col">
              <span>Spotify</span>
              <p className="mt-1 leading-4 opacity-50">
                Designer & Art Director
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SideProjects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Side Projects</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

function GetInTouch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

function Blog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blog</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

function CV() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CV</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

function Spotify() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spotify</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

function Location() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Location</CardTitle>
        <CardDescription>Maryland, USA</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

function LatestProject() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Project</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
