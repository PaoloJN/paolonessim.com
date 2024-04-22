import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { SiteHeader } from "@/components/site-header";

import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

import { cx } from "class-variance-authority";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cx("text-black  dark:text-white", inter.className)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col  items-center px-4 antialiased">
            <main className="w-[1140px] space-y-[25px] p-[20px]">
              <SiteHeader />
              <main>{children}</main>
              <Footer />
            </main>
          </div>
          {/* <TailwindIndicator /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
