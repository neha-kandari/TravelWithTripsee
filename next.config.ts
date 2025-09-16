import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  
  // Static file handling
  trailingSlash: false,
  generateEtags: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["framer-motion", "swiper", "@heroicons/react"],
    scrollRestoration: true,
  },
  
  // Server external packages
  serverExternalPackages: ["mongoose", "mongodb", "cloudinary", "multer", "firebase"],
  
  // Webpack configuration for better builds
  webpack: (config, { isServer }) => {
    // Handle node modules that need to be externalized
    if (isServer) {
      config.externals.push('mongoose', 'mongodb', 'firebase');
    }
    
    // Fix for 'self is not defined' error
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        // Firebase fallbacks
        'firebase/app': false,
        'firebase/auth': false,
        'firebase/firestore': false,
        'firebase/storage': false,
      };
    }
    
    return config;
  },
  
  // Headers for static assets
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Content-Type", value: "video/mp4" },
        ],
      },
      {
        source: "/uploads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/Destination/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/Feedback/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Content-Type", value: "video/mp4" },
        ],
      },
    ];
  },
  
  // Build optimizations
  eslint: { 
    ignoreDuringBuilds: true,
    dirs: ['app', 'components', 'lib', 'contexts', 'hooks']
  },
  typescript: { 
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json'
  },
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    loader: "default",
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "images.pexels.com", 
        pathname: "/**" 
      },
      { 
        protocol: "https", 
        hostname: "images.unsplash.com", 
        pathname: "/**" 
      },
      { 
        protocol: "https", 
        hostname: "**.cloudinary.com", 
        pathname: "/**" 
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      // Additional image hosting services
      {
        protocol: "https",
        hostname: "pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      // Bing and Microsoft image services
      {
        protocol: "https",
        hostname: "th.bing.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.bing.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.mm.bing.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.bing.net",
        pathname: "/**",
      },
      // Google Images and other services
      {
        protocol: "https",
        hostname: "images.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.gstatic.com",
        pathname: "/**",
      },
      // Additional popular image hosting services
      {
        protocol: "https",
        hostname: "imgur.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.pexels.com",
        pathname: "/**",
      },
      // Additional common image hosting services
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.istockphoto.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.istockphoto.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "istockphoto.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.freeimages.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "freepik.com",
        pathname: "/**",
      },
      // Additional stock photo services
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shutterstock.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gettyimages.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gettyimages.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.gettyimages.com",
        pathname: "/**",
      },
      // Additional popular image hosting domains
      {
        protocol: "https",
        hostname: "pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      // Supabase Storage patterns
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.in",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  
  // Redirects for better SEO
  async redirects() {
    return [
      // Removed admin redirect to allow proper authentication flow
    ];
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
