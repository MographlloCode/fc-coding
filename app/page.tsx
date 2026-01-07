'use client'

import { Button } from "@/components/common/Button";
import { SwitchButtons } from "@/components/common/SwitchButtons";
import { FootballField } from "@/components/features/FootballField/FootballField";
import { TACTICAL_SCHEMES } from "@/components/features/TaticsShowcase/constants/taticsData";
import { TaticMetrics } from "@/components/features/TaticsShowcase/TaticMetrics";
import { TaticsSwitcher } from "@/components/features/TaticsShowcase/TaticsSwitcher";
import { Icon, Sidebar } from "@components";
import Image from "next/image";
import { BiBookOpen, BiChevronsRight, BiSearchAlt2 } from "react-icons/bi";

export default function Home() {
  const activeSchemeMetrics = TACTICAL_SCHEMES[0]["metrics"]

  function onSwitchTeamUpClick() {
    console.log("Clicou pra Cima")
  }

  function onSwitchTeamDownClick() {
    console.log("Clicou pra Baixo")
  }

  function onContinueClick() {
    console.log("Continuou")
  }

  function onHeaderSearchClick() {
    console.log("Clickou na busca do header")
  }

  function onGuideClick() {
    console.log("Clickou na busca do header")
  }

  return (<>
    <Sidebar/>
    <main className="flex flex-col flex-1 transition-all duration-400 ps-10 md:ps-12">
      <header className="flex flex-col w-full">
        <section className="flex justify-between items-center py-3 ps-2">
          <div className="flex items-center gap-3">
            <SwitchButtons onUpClick={onSwitchTeamUpClick} onDownClick={onSwitchTeamDownClick} />
            <div className="flex items-center gap-2">
              <Image src={'/corinthians-logo.webp'} className="w-10" alt="" width={64} height={64}/>
              <div className="flex flex-col">
                <h1 className="leading-5 uppercase font-medium">Sport Club Corinthians Paulista</h1>
                <p className="text-zinc-400 text-sm leading-4">4x Campeão da Copa do Brasil</p>
              </div>
            </div>
          </div>
          <div className="flex items-center h-full">
            <div className="flex h-full items-center justify-center px-6 gap-2">
              <Button>
                <Icon icon={BiSearchAlt2} onClick={onHeaderSearchClick} />
              </Button>
              <Button>
                <Icon icon={BiBookOpen} onClick={onGuideClick} />
              </Button>
            </div>
            <div className="flex flex-col h-full items-center justify-center px-6">
              <h1 className="leading-4 text-sm font-bold">12 Jan. 2026</h1>
              <h2 className="text-xs text-zinc-400 leading-3 self-start">Sat. 12:30</h2>
            </div>
            <Button className="h-full bg-indigo-700 hover:bg-indigo-800 transition-all ease-in-out duration-200 font-semibold ps-4 pe-3 py-2 flex items-center gap-1" onClick={onContinueClick}>
              <h1 className="leading-7 uppercase">Continue</h1>
              <Icon icon={BiChevronsRight} className="text-zinc-100" size={22} />
            </Button>
          </div>
        </section>
        <section className="border-b border-zinc-800"></section>
      </header>
      <main className="flex flex-1 transition-all duration-400 p-4 h-full">
        <section className="w-fit h-full flex flex-col justify-center">
          <TaticsSwitcher taticName="Attack" taticTitle="4-3-3" />
          <FootballField/>
          <TaticMetrics metrics={activeSchemeMetrics} />
        </section>
        <section className="grow flex flex-col size-full">
          a
        </section>
      </main>
    </main>
  </>);
}