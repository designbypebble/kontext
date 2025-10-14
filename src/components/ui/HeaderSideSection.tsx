interface props {
  inverted?: boolean;
  label?: string;
}

export function HeaderSideSection({
  inverted = false,
  label = "[ IMPACT ]",
}: props) {
  return (
    <div className="flex-col items-center h-auto w-[var(--grid-space)] py-[39px] px-[25px] gap-[20px] lg:flex max-md:hidden">
      {/* Top Line */}
      <div className="flex-1 w-[0.5px] bg-black/25"></div>

      {/* Label */}
      <span
        className={`flex justify-center items-center h-[72px] w-[16px] px-2 text-xs tracking-widest text-foreground/30 whitespace-nowrap ${
          inverted ? "rotate-90" : "rotate-270"
        } font-[Geist_Mono]`}
      >
        {label}
      </span>

      {/* Bottom Line */}
      <div className="flex-1 w-[0.5px] bg-black/25"></div>
    </div>
  );
}
