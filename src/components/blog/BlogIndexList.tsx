import Divider from "@/components/ui/Divider";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { BlogPostData } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogIndexList({ posts }: { posts: BlogPostData[] }) {
  return (
    <LayoutWrapper className="lg:px-[66px]">
      <ul className="grid grid-cols-2 gap-4 relative max-sm:grid-cols-1">
        <div className="absolute h-full flex gap-4 inset-0 justify-center max-sm:hidden pointer-events-none">
          <Divider className="!h-full !w-[1px]" />
          <Divider className="!h-full !w-[1px]" />
        </div>

        {posts.map((p, i) => (
          <React.Fragment key={p.slug}>
            <li className="w-full">
              <Link
                href={`/blog/${p.slug}`}
                className="flex flex-col justify-between w-full"
              >
                <div className="w-full relative aspect-[481/184] overflow-clip">
                  {p.image && (
                    <Image
                      width={481}
                      height={184}
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover max-h-full max-w-full"
                    />
                  )}
                </div>
                <Divider className="w-full h-[1px]" />
                <div className="flex flex-col self-stretch gap-1 p-6">
                  <h2 className="text-3xl font-medium">{p.title}</h2>
                  {p.description && (
                    <p className="text-foreground/50 text-[14px] h-[64px] truncate-text">
                      {p.description}
                    </p>
                  )}
                  <div className="w-full flex justify-between items-center mt-4  !font-mono text-[12px]">
                    <p className="flex items-center gap-2 ">
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
            <Divider className="sm:hidden" />
            <Divider className="sm:hidden mt-10" />
            {/* ✅ Add divider pair after every 2 posts on devices greater than sm */}
            {(i + 1) % 2 === 0 && (
              <div className="col-span-2 flex flex-col gap-4 max-sm:hidden">
                <Divider />
                <Divider />
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </LayoutWrapper>
  );
}
