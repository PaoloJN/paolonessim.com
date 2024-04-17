import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>Paolo Nessim</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mt-5 leading-[20px] opacity-75">
          Hello. I’m Isabella Clarke, a visionary Brand Founder hailing from the
          dynamic city of London. With a deep understanding of the power of
          branding, I am dedicated to creating compelling brand experiences that
          resonate with audiences and drive meaningful connections. Let’s embark
          on a transformative journey together.
        </p>
      </CardContent>
    </Card>
  )
}
