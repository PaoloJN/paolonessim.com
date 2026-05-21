import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["tsx", "ts", "jsx", "js", "md", "mdx"],
};

const withMDX = nextMDX({
    extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
