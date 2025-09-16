interface props{
    inverted?:boolean
    label?:string
}

export function HeaderSideSection({inverted = false,label="[ IMPACT ]"}:props) {
  return ( 
    <div className="flex flex-col items-center h-auto w-[66px] py-[39px] px-[25px] gap-[20px] hidden lg:flex">
          {/* Top Line */}
          <div className="flex-1 w-[0.5px] bg-black/25"></div>

          {/* Label */}
          <span className={`flex justify-center items-center h-[72px] w-[16px] px-2 text-xs tracking-widest text-black/30 whitespace-nowrap ${inverted ? 'rotate-90' : 'rotate-270'} font-[Geist_Mono]`}>
            {label}
          </span>

          {/* Bottom Line */}
          <div className="flex-1 w-[0.5px] bg-black/25"></div>
        </div>
      
  );
}