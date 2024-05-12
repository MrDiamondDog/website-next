/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.shields.io"
            }
        ],
        unoptimized: true
    },
    basePath: "/",
};

export default nextConfig;
