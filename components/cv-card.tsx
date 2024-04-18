import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"

interface CVProps {
  className?: string
}

export default function CV({ className, ...props }: CVProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>CV</CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-3 flex flex-col">
        <Button variant="outline" size="sm" className="justify-between">
          View
          <ArrowTopRightIcon className="w-4 h-4 opacity-50" />
        </Button>
        <Button variant="outline" size="sm" className="justify-between">
          Download
          <ArrowDownIcon className="w-4 h-4 opacity-50" />
        </Button>
      </CardContent>
    </Card>
  )
}
