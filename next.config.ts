import type { NextConfig } from "next";
import posts from "./content/posts.json";

const nextConfig: NextConfig = {
  async redirects() {
    const archive = posts.map((post) => ({
      source: `/${post.slug}`,
      destination: `/blog/${post.slug}`,
      permanent: true,
    }));

    return [
      { source: "/home", destination: "/training", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      ...archive,
    ];
  },
};

export default nextConfig;
