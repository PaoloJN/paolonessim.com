import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/ui/icons";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { ExternalLink } from "@/components/external-link";

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
          <ExternalLink href={siteConfig.links.twitter}>
            <Icons.twitter className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs">Twitter - X</span>
          </ExternalLink>
          {/* LinkedIn */}
          <ExternalLink href={siteConfig.links.linkedin}>
            <LinkedInLogoIcon className="h-4 w-4" />
            <span className="text-xs">LinkedIn</span>
          </ExternalLink>
          {/* Email */}
          <ExternalLink href={siteConfig.links.email}>
            <EnvelopeClosedIcon />
            <span className="text-xs">Email</span>
          </ExternalLink>
        </div>
      </CardContent>
    </Card>
  );
}
