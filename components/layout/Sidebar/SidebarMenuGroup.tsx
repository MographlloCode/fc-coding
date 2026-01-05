import { type IconType } from "react-icons"
import { Icon } from "../../common/Icon"
import { SidebarItemTitle } from "./SidebarItemTitle"
import { Tooltip } from "@/components/common/Tooltip"

type GroupObjectProps = {
    title: string,
    icon: IconType,
    link: string,
}

interface SidebarMenuGroupProps {
    groupData: GroupObjectProps[]
    sidebarOpen: boolean
}

export function SidebarMenuGroup({groupData, sidebarOpen}: SidebarMenuGroupProps) {
    return (
        <div className={`flex flex-col gap-3 w-full`}>
            {groupData.map(({title, icon, link}) => (
                <div className="relative flex items-center gap-1.5 hover:cursor-pointer group" key={title.toLowerCase()}>
                    <Icon icon={icon} linkUrl={link} />
                    <SidebarItemTitle title={title} sidebarOpen={sidebarOpen} />
                    {!sidebarOpen && <Tooltip title={title} />} 
                </div>
            ))}
        </div>
    )
}