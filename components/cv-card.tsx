"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CVProps {
  className?: string;
}

// use External link component from get-in-touch-card.tsx
export default function CV({ className, ...props }: CVProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>CV</CardTitle>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col space-y-2 pb-4">
        {/* View Resume */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-between bg-transparent opacity-80"
            >
              <span>View</span>
              <ArrowTopRightIcon className="h-4 w-4 opacity-50" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90%] overflow-y-scroll">
            <DialogHeader>
              <DialogTitle>View Resume</DialogTitle>
              <DialogDescription>
                This is a preview of my resume. You can download it by clicking
                the download button below.
              </DialogDescription>
            </DialogHeader>
            <Image
              alt="resume"
              src="/resume-example.png"
              className="mt-5 h-full w-full"
              width={800}
              height={800}
            />
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          size="sm"
          className="justify-between bg-transparent opacity-80"
        >
          Download
          <ArrowDownIcon className="h-4 w-4 opacity-50" />
        </Button>
      </CardContent>
    </Card>
  );
}
