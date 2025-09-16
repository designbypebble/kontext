

export default function NavItemsSection(){
return (<div className="flex flex-col p-[13px] items-center gap-2 bg-blue-300 hidden lg:flex">
<NavItems title={1} active={true}/>
<div className="flex-1"></div>
<NavItems title={2} active={false}/>
<NavItems title={3} active={false}/>
</div>)
}

interface NavItemsProps{
    title?:number,
    active?:boolean
}

export function NavItems({ title = 0, active = true }: NavItemsProps) {
  return (
    <div
      className={`w-[40px] h-[40px] rounded-full justify-center items-center flex border 
        ${active ? "border-accent/50" : "border-gridline bg-transparent"}`}
    >
      <p
        className={`text-[14px] font-[Geist_Mono] 
          ${active ? "text-accent" : "text-gridline"}`}
      >
        0{title}
      </p>
    </div>
  );
}