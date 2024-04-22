import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "./ui/button";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./ui/icons";

import {
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

interface GetInTouchProps {
  className?: string;
}

export default function GetInTouch({ className, ...props }: GetInTouchProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="grid grid-cols-2 gap-2">
          {/* Github */}
          <ExternalLink href={siteConfig.links.github}>
            <GitHubLogoIcon className="h-4 w-4" />
            <span className="text-xs">GitHub</span>
          </ExternalLink>
          {/* Twitter */}
          <ExternalLink href={siteConfig.links.github}>
            <Icons.twitter className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs">Twitter - X</span>
          </ExternalLink>
          {/* LinkedIn */}
          <ExternalLink href={siteConfig.links.github}>
            <LinkedInLogoIcon className="h-4 w-4" />
            <span className="text-xs">LinkedIn</span>
          </ExternalLink>
          {/* Email */}
          <ExternalLink href={siteConfig.links.github}>
            <EnvelopeClosedIcon />
            <span className="text-xs">Email</span>
          </ExternalLink>
        </div>
      </CardContent>
    </Card>
  );
}

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <div
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "w-full justify-between border-[0.5px] bg-transparent",
        )}
      >
        <div className="flex flex-row items-center justify-center space-x-2 opacity-70">
          {children}
        </div>
        {/* <ArrowTopRightIcon className="w-3.5 h-3.5 opacity-50" /> */}
      </div>
    </Link>
  );
}
