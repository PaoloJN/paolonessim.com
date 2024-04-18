import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "./ui/button"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "./ui/icons"

import {
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"

interface GetInTouchProps {
  className?: string
}

export default function GetInTouch({ className, ...props }: GetInTouchProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex flex-col">
        {/* Github */}
        {/* <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "justify-between w-full"
            )}
          >
            <div className="flex flex-row items-center space-x-2 opacity-60">
              <GitHubLogoIcon className="h-4 w-4" />
              <span>GitHub</span>
            </div>
            <ArrowTopRightIcon className="w-4 h-4 opacity-50" />
          </div>
        </Link> */}
        {/* Twitter */}
        {/* <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "justify-between w-full"
            )}
          >
            <div className="flex flex-row items-center space-x-2 opacity-60">
              <Icons.twitter className="h-3.5 w-3.5 fill-current" />
              <span>Twitter - X</span>
            </div>
            <ArrowTopRightIcon className="w-4 h-4 opacity-50" />
          </div>
        </Link> */}
        {/* LinkedIn */}
        {/* <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "justify-between w-full"
            )}
          >
            <div className="flex flex-row items-center space-x-2 opacity-60">
              <LinkedInLogoIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </div>
            <ArrowTopRightIcon className="w-4 h-4 opacity-50" />
          </div>
        </Link> */}
        {/* Email */}
        {/* <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "justify-between w-full"
            )}
          >
            <div className="flex flex-row items-center space-x-2 opacity-60">
              <EnvelopeClosedIcon />
              <span>Email</span>
            </div>
            <ArrowTopRightIcon className="w-4 h-4 opacity-50" />
          </div>
        </Link> */}
      </CardContent>
    </Card>
  )
}
