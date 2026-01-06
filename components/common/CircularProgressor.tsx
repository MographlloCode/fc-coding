interface CircularProgressorProps extends React.ComponentPropsWithoutRef<'div'> {
  percentage: number;
  size?: number;
  children?: React.ReactNode
  strokeSize?: number
}

export function CircularProgressor({ percentage, size = 80, strokeSize = 2, children, ...props }: CircularProgressorProps) {
  const strokeWidth = strokeSize;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" {...props}>
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
      {children}
    </div>
  );
}