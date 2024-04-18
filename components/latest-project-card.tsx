import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"

interface LatestProjectProps {
  className?: string
}

export default function LatestProject({
  className,
  ...props
}: LatestProjectProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Latest Project</CardTitle>
        <CardDescription className="flex flex-row">
          {/* Weather AI */}
          <ArrowTopRightIcon className="ml-2 w-4 h-4 opacity-50" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-5">
        <div>
          <span className="text-md">Weather AI - weather chat application</span>
          <p className="opacity-50 mt-2">
            Weather AI is a weather forecasting app that uses machine learning
          </p>
        </div>

        <div className="overflow-hidden">
          <Image
            src="/weather-ai.png"
            alt="Picture of the author"
            className="w-full h-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
            width={200}
            height={200}
          />
        </div>
      </CardContent>
    </Card>
  )
}
