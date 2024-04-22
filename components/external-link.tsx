import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
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
