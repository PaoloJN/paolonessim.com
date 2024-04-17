import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Add on hover show image and track mouse with image if in mouse is in element
export default function Projects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Old style */}
        <div className="flex flex-col px-2.5 pt-2 w-full">
          <div className="flex gap-5 py-4 border-b-[0.5px] border-black/15 justify-between last:border-b-0 ">
            <span className="opacity-50">Since 2023</span>

            <div className="flex flex-col">
              <span>Weather AI</span>
              <p className="mt-1 leading-4 opacity-50">
                Weather AI is a weather forecasting app that uses machine
                learning
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
