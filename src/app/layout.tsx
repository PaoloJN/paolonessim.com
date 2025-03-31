import "@/styles/globals.css";

import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
// import { ViewTransitions } from "next-view-transitions";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://paolonessim.com"),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "paolo jn",
        "paolo jn portfolio",
        "paolo js github",
        "paolo nessim",
        "paolo nessim github",
        "paolo nessim portfolio",
        "software developer",
        "Full stack developer",
    ],
    authors: [
        {
            name: "Paolo Nessim",
            url: "https://paolonessim.com",
        },
    ],
    creator: "paolonessim",
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
        creator: "@paolonessim",
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
        <ViewTransitions>
            <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <TooltipProvider>
                            <main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-8 md:py-16 md:overflow-x-visible">
                                {children}
                            </main>
                        </TooltipProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ViewTransitions>
    );
}
