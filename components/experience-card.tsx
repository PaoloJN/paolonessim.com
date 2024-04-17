import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperienceAndEducation() {
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

          <div className="flex gap-5 py-4 border-b-[0.5px] border-black/15 ">
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
          <div className="flex gap-5 py-4 border-b-[0.5px] border-black/15 last:border-b-0 ">
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
