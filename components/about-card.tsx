"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

interface AboutProps {
  className?: string;
}

// Rewrite  about

export default function About({ className, ...props }: AboutProps) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date("2006-1-04");
    const currentDate = new Date();
    setAge(currentDate.getFullYear() - birthDate.getFullYear() || 18);
  }, []);

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>Paolo Nessim</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="leading-[19px] opacity-75">
          Hi! I&apos;m Paolo Nessim, a {age} year old developer with three years
          of experience working on open-source projects. I love building cool
          projects and bringing ideas to life. I&apos;m always up for learning
          new things and see every challenge as a chance to get better.
        </p>
      </CardContent>
    </Card>
  );
}
