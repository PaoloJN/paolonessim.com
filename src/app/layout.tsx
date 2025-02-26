import "@/styles/globals.css";

import { cn } from "@/libraries/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { siteConfig } from "@/config/site";

import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import Navigation from "@/components/building/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import SnowFall from "@/components/snowfall";

// TODO: Add metadata to the config file
export const metadata: Metadata = {
    metadataBase: new URL("https://paolonessim.com"),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "suraj gupta",
        "suraj gupta portfolio",
        "suraj sujjeee",
        "suraj github",
        "sujjeee",
        "sujjeeee",
        "sujjeee github",
        "sujjeee portfolio",
        "software developer",
        "Full stack developer",
    ],
    authors: [
        {
            name: "Suraj Gupta",
            url: "https://sujjeee.com",
        },
    ],
    creator: "sujjeee",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@sujjeeee",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    colorScheme: "dark light",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    GeistSans.variable,
                    GeistMono.variable
                )}
            >
                <ViewTransitions>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <TooltipProvider>
                            <main className="mx-auto w-full mb-16 max-w-screen-sm py-8">
                                {/* Christmas Snowfall */}
                                {/* <SnowFall /> */}
                                {children}
                                <Navigation />
                            </main>
                        </TooltipProvider>
                    </ThemeProvider>
                </ViewTransitions>
            </body>
        </html>
    );
}
