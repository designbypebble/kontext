import clsx from "clsx";

export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("max-w-full w-full h-[1px] bg-gridline", className)} />
  );
}
