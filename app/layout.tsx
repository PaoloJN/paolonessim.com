import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

import { cx } from "class-variance-authority";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://paolonessim.com"),
  title: {
    default: siteConfig.title,
    template: `%s | Paolo Nessim`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: "developer, designer .!",
    url: siteConfig.URL,
    siteName: siteConfig.title,
    locale: "en_US",
    type: "website",
  },
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
          <div className="relative  antialiased">
            <main className="container mx-auto space-y-[25px] p-[20px]">
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
