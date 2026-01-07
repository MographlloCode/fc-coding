import { type IconBaseProps, type IconType } from "react-icons"; 
import Link from "next/link"; 

interface IconProps extends IconBaseProps {
    icon: IconType,
    linkUrl?: string,
    onClick?: () => void,
    className?: string
    size?: number
}

const iconConfigs = {
    size: 18,
    className: "text-zinc-500 hover:text-indigo-400 group-hover:text-indigo-400 transition-all ease-in-out duration-200 min-w-5"
}

export function Icon({icon: IconElement, linkUrl, onClick, className, size }: IconProps){
    const iconElement = <IconElement onClick={onClick} size={size ? size :iconConfigs.size} className={className ? className : iconConfigs.className} />
    
    if(linkUrl) {
        return <Link href={linkUrl} className="text-xl">
            {iconElement}
        </Link>
    }

    return iconElement
}