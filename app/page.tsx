'use client'

import { SwitchButtons } from "@/components/common/SwitchButtons";
import { FootballField } from "@/components/features/FootballField/FootballField";
import { TACTICAL_SCHEMES } from "@/components/features/TaticsShowcase/constants/taticsData";
import { TaticMetrics } from "@/components/features/TaticsShowcase/TaticMetrics";
import { TaticsSwitcher } from "@/components/features/TaticsShowcase/TaticsSwitcher";
import { BackdropBlur } from "@/components/layout/BackdropBlur";
import { Sidebar } from "@components";

export default function Home() {
  const activeSchemeMetrics = TACTICAL_SCHEMES[0]["metrics"]

  function onSwitchTeamUpClick() {
    console.log("Clicou pra Cima")
  }

  function onSwitchTeamDownClick() {
    console.log("Clicou pra Baixo")
  }

  return (<>
    <Sidebar/>
    <main className="flex flex-col flex-1 transition-all duration-400 ps-10 md:ps-12">
      <header className="flex flex-col w-full">
        <section className="flex justify-between items-center py-2 ps-2">
          <div className="flex items-center gap-1">
            <SwitchButtons onUpClick={onSwitchTeamUpClick} onDownClick={onSwitchTeamDownClick} />
            
          </div>
        </section>
        <section className="border-b border-zinc-800"></section>
      </header>
      <main className="flex flex-1 transition-all duration-400 p-4">
        <section className="flex flex-col gap-4 justify-center">
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
