export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Paolo Nessim",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
