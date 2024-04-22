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
        <p className="opacity-75">
          Hello. I&apos;m Paolo Nessim, I&apos;m an {age}-year-old developer
          starting an exciting technology journey. I love coding and turning
          ideas into impactful projects. I&apos;m always ready to learn and try
          new things, and I see every challenge as a chance to grow. I&apos;m
          looking to work with others who are passionate about making a
          difference in technology.
        </p>
      </CardContent>
    </Card>
  );
}
