import "@/styles/globals.css";

import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

const serif = Instrument_Serif({
    weight: "400",
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://paolonessim.com"),
    title: {
        default: `${siteConfig.fullName} — Engineer`,
        template: `%s · ${siteConfig.fullName}`,
    },
    description: siteConfig.description,
    creator: siteConfig.fullName,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.fullName,
        description: siteConfig.description,
        siteName: siteConfig.fullName,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 600, alt: siteConfig.fullName }],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.fullName,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@paolonessim",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    colorScheme: "light dark",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
        { media: "(prefers-color-scheme: dark)", color: "#0E0E0C" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html
                lang="en"
                className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
                suppressHydrationWarning
            >
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ViewTransitions>
    );
}
