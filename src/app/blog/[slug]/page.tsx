import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { getMDXComponents } from "@/mdx-components";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import NextPosts from "@/components/blog/NextPosts";
import Footer from "@/components/ui/Footer";

const postsDir = path.join(process.cwd(), "src/content/posts");

/** 🧭 Generate static routes */
export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

/** 🧾 Read MDX frontmatter */
function getPostData(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  return { data, content };
}

/** 🧠 Dynamic metadata from frontmatter */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = getPostData(slug);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.image ? [{ url: data.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
    },
  };
}

/** 📰 Blog post page */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data, content } = getPostData(slug);

  return (
    <main className="w-full overflow-hidden">
      <LayoutWrapper className="lg:px-[66px] mx-auto px-4">
        <div className="w-[360px] max-w-full items-center mx-auto py-20 flex flex-col gap-4">
          <Link href={"/blog"} className="text-[16px]">
            ← All Blogs
          </Link>
          <h1 className="text-5xl font-semibold text-center">{data.title}</h1>
          <div className="w-full flex justify-between items-center !font-mono text-[12px] max-sm:flex-col gap-2">
            <p className="flex items-center gap-2 ">
              <span className="size-5 bg-accent rounded-full" />
              {data.author}
            </p>
            <p>
              {new Date(data.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </LayoutWrapper>
      <Divider />
      <LayoutWrapper className="lg:px-[66px] mx-auto px-4">
        <Image
          width={980}
          height={381}
          className="aspect-[980/381] w-full"
          src={data.image}
          alt={data.title}
        />
      </LayoutWrapper>
      <Divider />
      <LayoutWrapper className="lg:px-[66px] mx-auto px-4">
        <article className="prose dark:prose-invert mx-auto py-10 w-[766px] max-w-full">
          <MDXRemote source={content} components={getMDXComponents()} />
        </article>
      </LayoutWrapper>
      <Divider />
      <Divider className="mt-8" />
      <NextPosts currentSlug={slug} />
      <Divider />
      <Divider className="mt-8" />
      <div className="w-full flex flex-col items-center">
        {" "}
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
