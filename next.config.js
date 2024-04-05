/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/travel-app",
    // assetPrefix: "/travel-app/",
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
