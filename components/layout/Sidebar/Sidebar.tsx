'use client'

import { useState } from "react";

import { Icon } from "@components";
import { SidebarMenuGroup } from "./SidebarMenuGroup";
import { SidebarItemTitle } from "./SidebarItemTitle";

import { sidebarMenuGroups } from "./constants/sidebarMenuGroups";

import { BiSolidDockLeft, BiSolidDockRight, BiSolidExit } from "react-icons/bi";

export function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const sidebarSize = sidebarOpen ? 'w-full md:w-52' : 'w-10 md:w-12'

    return <div className={`fixed z-40 items-center bg-zinc-900 flex flex-col p-2 md:p-4 justify-between h-full ${sidebarSize} gap-6 md:gap-8 transition-all ease-in-out duration-400 overflow-hidden`}>
        <header className="w-full flex items-center gap-1.5 font-semibold">
            <Icon icon={sidebarOpen ? BiSolidDockRight : BiSolidDockLeft} onClick={() => setSidebarOpen(!sidebarOpen)} />
            <SidebarItemTitle title="Coding Football" sidebarOpen={sidebarOpen}/>
        </header>
        <nav className="flex flex-col items-center gap-6 md:gap-8 grow w-full">
            {sidebarMenuGroups.map((group, index) => <SidebarMenuGroup key={index} groupData={group} sidebarOpen={sidebarOpen} />)}
        </nav>
        <footer className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Icon icon={BiSolidExit} />
                <SidebarItemTitle title="Exit" sidebarOpen={sidebarOpen}/>
            </div>
        </footer>
    </div>
} 