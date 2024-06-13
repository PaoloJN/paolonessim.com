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
      <CardContent className="mt-auto px-3 py-2">
        <ExperienceAndEducationItem
          title="Web Development"
          startDate="2021"
          endDate="Now"
          description="Currently learning web development and building projects."
        />
        <ExperienceAndEducationItem
          title="High School"
          startDate="2020"
          endDate="Now"
          description="Currently in high school, learning and preparing for college."
        />
      </CardContent>
    </Card>
  );
}

interface ExperienceAndEducationItemProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

function ExperienceAndEducationItem({
  title,
  startDate,
  endDate,
  description,
}: ExperienceAndEducationItemProps) {
  return (
    <div className="flex justify-between gap-5 border-b-[0.5px] border-black/15 py-2 last:border-b-0">
      <div className="mr-[20px] flex items-center gap-1.5 self-start whitespace-nowrap text-[11.5px] opacity-50">
        <div>{startDate}</div>
        <div className="w-4 border-[0.5px] border-black opacity-50" />
        <div>{endDate}</div>
      </div>

      <div className="ml-[5px] flex flex-col">
        <span>{title}</span>
        <p className="mt-1 leading-[18px] opacity-50">{description}</p>
      </div>
    </div>
  );
}
