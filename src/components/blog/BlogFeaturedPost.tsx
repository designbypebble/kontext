import Divider from "@/components/ui/Divider";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { BlogPostData } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";

export default function BlogFeaturePost({ p }: { p: BlogPostData }) {
  return (
    <LayoutWrapper className="lg:px-[66px]">
      <Link
        href={`/blog/${p.slug}`}
        className="grid grid-cols-2 sm:gap-4 relative max-sm:flex max-sm:flex-col"
      >
        <div className="absolute h-full flex gap-4 inset-0 justify-center max-sm:hidden">
          <Divider className="!h-full !w-[1px]" />
          <Divider className="!h-full !w-[1px]" />
        </div>
        <div className="flex flex-col self-stretch justify-between p-6 sm:gap-[100px] max-sm:gap-8 max-sm:order-2">
          <div className="w-full flex justify-between items-center pt-4 !font-mono text-[12px]">
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

          <div className="w-full flex flex-col gap-3">
            {p.featured && (
              <p className="text-[12px] uppercase tracking-wider text-foreground">
                [Featured]
              </p>
            )}
            <h2 className="text-3xl font-medium text-foreground">{p.title}</h2>
            {p.description && (
              <p className="text-foreground/50 text-[14px] h-[64px] truncate-text">
                {p.description}
              </p>
            )}
          </div>
        </div>

        <div className="w-full aspect-[482/323] max-h-[320px] self-stretch ">
          {p.image && (
            <Image
              width={482}
              height={323}
              src={p.image}
              alt={p.title}
              className="w-full h-full object-contain max-h-full max-w-full"
            />
          )}
          <Divider className="sm:hidden" />
        </div>
      </Link>
    </LayoutWrapper>
  );
}
