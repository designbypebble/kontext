import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import Divider from "@/components/ui/Divider";
import React from "react";
import BlogIndexTitle from "@/components/blog/BlogIndexTitle";
import BlogIndexList from "@/components/blog/BlogIndexList";
import BlogFeaturePost from "@/components/blog/BlogFeaturedPost";
import { BlogPostMetadata } from "@/lib/mdx";
import Footer from "@/components/ui/Footer";

const postsDir = path.join(process.cwd(), "src/content/posts");

export default async function BlogIndex() {
  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDir, file);
    const source = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(source);
    const meta = data as BlogPostMetadata;

    return {
      slug,
      ...meta,
    };
  });

  return (
    <div className="!font-sans w-full min-h-screen">
      <main className="w-full relative flex flex-col items-center">
        <BlogIndexTitle />
        <Divider />
        <BlogFeaturePost p={posts[0]} />
        <LayoutWrapper>
          <Divider />
          <Divider className="mt-12" />
        </LayoutWrapper>
        <BlogIndexList posts={posts} />
        <Footer />
      </main>
    </div>
  );
}
