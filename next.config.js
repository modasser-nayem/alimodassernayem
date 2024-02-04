/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      esmExternals: "loose",
      serverComponentsExternalPackages: ["mongoose"],
      images: {
         remotePatterns: [
            {
               protocol: "https",
               hostname: "res.cloudinary.com",
               port: "",
               pathname: "**",
            },
         ],
      },
   },
};

module.exports = nextConfig;
