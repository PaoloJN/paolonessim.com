import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AboutProps {
  className?: string;
}

export default function About({ className, ...props }: AboutProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>Paolo Nessim</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="opacity-75">
          Hello. I’m Isabella Clarke, a visionary Brand Founder hailing from the
          dynamic city of London. With a deep understanding of the power of
          branding, I am dedicated to creating compelling brand experiences that
          resonate with audiences and drive meaningful connections. Let’s embark
          on a transformative journey together.
        </p>
      </CardContent>
    </Card>
  );
}
