import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface CurrentlyProps {
  className?: string;
}

export default function Currently({ className, ...props }: CurrentlyProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Currently</CardTitle>
        <CardDescription className="flex items-center justify-center">
          <span className="dot h-2 w-2 rounded-full bg-green-500">
            <span className="dot-inner"></span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col space-y-2 pb-3">
        <p className="mx-[0.5px] text-[11.5px] leading-[19px] opacity-75">
          {siteConfig.currently}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-between bg-transparent opacity-80"
        >
          <span>Contact</span>
          <ArrowTopRightIcon className="h-4 w-4 opacity-50" />
        </Button>
      </CardContent>
    </Card>
  );
}
