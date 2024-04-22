import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceAndEducationProps {
  className?: string
}

export default function ExperienceAndEducation({
  className,
  ...props
}: ExperienceAndEducationProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Experience & Education</CardTitle>
        {/* <CardDescription>Paolo Nessim</CardDescription> */}
      </CardHeader>
      <CardContent className="mt-auto">
        {/* Card content */}
        {/* border-b-[0.5px] */}
        <div className="flex justify-between gap-5 py-4 border-black/15">
          <div className="flex gap-1.5 self-start items-center whitespace-nowrap opacity-50 mr-[20px] text-[11.5px]">
            <div>2022</div>
            <div className="w-4 border-[0.5px] border-black opacity-50" />
            <div>Now</div>
          </div>

          <div className="flex flex-col ml-[5px]">
            <span>Creative Studio Owner</span>
            <p className="mt-1 leading-[18px] opacity-50">
              Self-employed at my own creative studio, delivering innovative
              design solutions and giving value to your brand experience.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
