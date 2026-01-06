import { FaShirt } from "react-icons/fa6"

interface PlayerProps {
  x: number
  y: number
  playerName: string
  role?: string
}

const shirtConfig = {
  className: "text-zinc-300 w-14 h-5 lg:h-6"
}

export function Player({ x, y, playerName, role }: PlayerProps) {
  return (
    <div 
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 w-fit"
      style={{ 
        left: `${(x / 500) * 100}%`, 
        top: `${(y / 740) * 100}%` 
      }}
    >
      <div className="flex flex-col items-center">
        <FaShirt className={shirtConfig.className}/>
        <span className="text-xs text-zinc-300 font-semibold">
          {playerName}
        </span>
        <span className="text-[10px] text-zinc-400 text-center">
          {role}
        </span>
      </div>
    </div>
  )
}