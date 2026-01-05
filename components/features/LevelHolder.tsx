interface LevelHolderProps {
  level: number;
  percentage: number;
  size?: number;
}

export function LevelHolder({ level, percentage, size = 80 }: LevelHolderProps) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-zinc-800"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          style={{ 
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 0.5s ease-in-out" 
          }}
          strokeLinecap="round"
          className="text-indigo-500"
        />
      </svg>
      <span className="absolute text-sm font-bold text-indigo-200">
        {level}
      </span>
    </div>
  );
}