interface ToolTipProps {
    title: string
}

export function Tooltip({title}: ToolTipProps) {
    return <div className="
            invisible opacity-0 group-hover:visible group-hover:opacity-100
            transition-opacity duration-200
            left-8 ml-2 text-sm text-zinc-300 
            tracking-wide bg-zinc-800 
            rounded-md fixed px-3 py-1.5 text-center 
            shadow-2xl capitalize z-50 whitespace-nowrap
            pointer-events-none
        ">
        {title}
    </div>
}