import type { Metadata } from "next/types";

export type BlogPostMetadata = Metadata & {
  title: string;
  author: string;
  date: string;
  description?: string;
  featured?: boolean;
  image?: string;
};

export type BlogPostData = {
  slug: string;
  title: string;
  author?: string;
  date: string;
  description?: string;
  featured?: boolean;
  image?: string;
};
