import { Break, SmallBreak } from "@/components/mdx/Break";
import { H1 } from "@/components/ui/typography/H1";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: H1,
  h2: (props) => (
    <h2 {...props} className="text-4xl font-medium mb-4">
      {props.children}
    </h2>
  ),
  p: (props) => (
    <p
      className="max-w-full text-[16px] text-foreground leading-[200%]"
      {...props}
    >
      {" "}
      {props.children}
    </p>
  ),
  img: (props) => <img {...props} className="w-full object-contain my-10" />,

  Break,
  SmallBreak,
};

export function getMDXComponents(): MDXComponents {
  return components;
}
