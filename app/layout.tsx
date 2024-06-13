import "@/styles/globals.css";

// import { TailwindIndicator } from "@/components/tailwind-indicator";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
      <Script
        defer
        src="https://analytics-gules.vercel.app/script.js"
        data-website-id="ed0dd708-7ada-462f-9d21-96b38ce31e0d"
      />
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
        <Analytics />
      </body>
    </html>
  );
}
