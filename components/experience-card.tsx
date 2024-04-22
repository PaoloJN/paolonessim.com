import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceAndEducationProps {
  className?: string;
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
        <div className="flex justify-between gap-5 border-black/15 py-4">
          <div className="mr-[20px] flex items-center gap-1.5 self-start whitespace-nowrap text-[11.5px] opacity-50">
            <div>2022</div>
            <div className="w-4 border-[0.5px] border-black opacity-50" />
            <div>Now</div>
          </div>

          <div className="ml-[5px] flex flex-col">
            <span>Creative Studio Owner</span>
            <p className="mt-1 leading-[18px] opacity-50">
              Self-employed at my own creative studio, delivering innovative
              design solutions and giving value to your brand experience.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
