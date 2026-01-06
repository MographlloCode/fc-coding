import { CircularProgressor } from "../common/CircularProgressor";

interface LevelHolderProps {
  level: number;
  percentage: number;
  size?: number;
}

export function LevelHolder({ level, percentage, size = 80 }: LevelHolderProps) {
  return (
    <CircularProgressor percentage={percentage} size={size} >
      <span className="absolute text-sm font-bold text-indigo-200">
        {level}
      </span>
    </CircularProgressor>
  );
}