// components/blog/NextPosts.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { BlogPostData } from "@/lib/mdx";

const postsDir = path.join(process.cwd(), "src/content/posts");

function getAllPosts(): BlogPostData[] {
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(postsDir, file);
      const { data } = matter.read(filePath);

      // ensure minimal required fields
      const frontmatter = data as Omit<BlogPostData, "slug">;

      return {
        slug,
        title: frontmatter.title || "Untitled",
        author: frontmatter.author || "Anonymous",
        date: frontmatter.date || new Date().toISOString(),
        description: frontmatter.description || "",
        featured: frontmatter.featured || false,
        image: frontmatter.image || "/images/placeholder.jpg",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function NextPosts({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === currentSlug);

  let nextPosts = allPosts.slice(currentIndex + 1, currentIndex + 3);
  if (nextPosts.length < 2) {
    nextPosts = [...nextPosts, ...allPosts.slice(0, 2 - nextPosts.length)];
  }

  return (
    <LayoutWrapper className="lg:px-[66px] mx-auto px-4 ">
      <ul className="grid grid-cols-2 gap-4 relative max-sm:grid-cols-1">
        {/* vertical dividers in the middle */}
        <div className="absolute h-full flex gap-4 inset-0 justify-center max-sm:hidden pointer-events-none">
          <Divider className="!h-full !w-[1px]" />
          <Divider className="!h-full !w-[1px]" />
        </div>

        {nextPosts.map((p) => (
          <React.Fragment key={p.slug}>
            <li className="w-full">
              <Link
                href={`/blog/${p.slug}`}
                className="flex flex-col justify-between w-full"
              >
                <div className="w-full relative aspect-[481/184] overflow-clip">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={481}
                      height={184}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <Divider className="w-full h-[1px]" />

                <div className="flex flex-col self-stretch gap-1 p-6">
                  <h2 className="text-3xl font-medium">{p.title}</h2>

                  {p.description && (
                    <p className="text-foreground/50 text-[14px] h-[64px] line-clamp-3">
                      {p.description}
                    </p>
                  )}

                  <div className="w-full flex justify-between items-center mt-4 font-mono text-[12px]">
                    <p className="flex items-center gap-2">
                      <span className="size-5 bg-accent rounded-full" />
                      {p.author}
                    </p>
                    <p>
                      {new Date(p.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </LayoutWrapper>
  );
}
