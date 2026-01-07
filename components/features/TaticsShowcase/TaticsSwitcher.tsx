'use client'

import { Icon } from "@/components/common/Icon"
import { SwitchButtons } from "@/components/common/SwitchButtons"
import { BiSearchAlt2 } from "react-icons/bi"

interface TaticsSwitcherProps {
    taticTitle: string
    taticName: string
}

export function TaticsSwitcher({ taticTitle, taticName }: TaticsSwitcherProps) {
    function onUpClick() {
        console.log("Clicou pra Cima")
    }

    function onDownClick() {
        console.log("Clicou pra Baixo")
    }
    
    return <section className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
            <SwitchButtons onUpClick={onUpClick} onDownClick={onDownClick} />
            <div className="flex flex-col">
                <h1 className="text-lg font-semibold leading-4">{taticTitle}</h1>
                <h2 className="text-zinc-400">{taticName}</h2>
            </div>
        </div>
        <Icon icon={BiSearchAlt2} />
    </section>
}