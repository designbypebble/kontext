import Bracket from "@/assets/svg/bracket";

export default function AccentBrackets() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between">
      <div className="w-full flex justify-between">
        <Bracket />
        <Bracket className="rotate-y-180" />
      </div>
      <div className="w-full flex justify-between rotate-x-180">
        <Bracket />
        <Bracket className="rotate-y-180" />
      </div>
    </div>
  );
}
