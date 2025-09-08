import clsx from "clsx";
import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function LogoIcon({ width = 20, height = 22, className }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Kontext"
      width={width}
      height={height}
      className={className}
    />
  );
}

export function LogoFull({ width = 86, height = 22, className }: LogoProps) {
  return (
    <Image
      src="/logo_full.svg"
      alt="Kontext Full"
      width={width}
      height={height}
      className={clsx("object-contain h-auto", className)}
    />
  );
}
