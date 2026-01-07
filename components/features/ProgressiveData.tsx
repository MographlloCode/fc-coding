'use client'

import { useWindowSize } from "@/hooks/use-window-size";
import { CircularProgressor } from "../common/CircularProgressor";

interface ProgressiveDataProps {
    value: number,
    title: string,
    percentage: number
    size?: number;
}

export function ProgressiveData({ value, title, percentage, size }: ProgressiveDataProps) {
    const { width } = useWindowSize()

    const responsiveSize = width >= 768 ? 32 : 24;
    const finalSize = size ?? responsiveSize;
    
    return <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl shadow-lg min-w-32 w-full">
        <div className="flex flex-col">
            <h1 className="text-lg md:text-xl leading-5">{value}</h1>
            <p className="text-sm md:text-base text-zinc-400">{title}</p>
        </div>
        <CircularProgressor percentage={percentage} size={finalSize} strokeSize={3} />
    </div>
}