import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogProps {
  className?: string
}

export default function Blog({ className, ...props }: BlogProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Blog</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
