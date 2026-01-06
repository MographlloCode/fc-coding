import { FootballField } from "@/components/features/FootballField/FootballField";
import { TACTICAL_SCHEMES } from "@/components/features/TaticsShowcase/constants/taticsData";
import { TaticMetrics } from "@/components/features/TaticsShowcase/TaticMetrics";
import { Sidebar } from "@components";

export default function Home() {
    const activeSchemeMetrics = TACTICAL_SCHEMES[0]["metrics"]

  return (<>
    <Sidebar/>
    <main className="flex flex-col flex-1 transition-all duration-400 ps-10 md:ps-12">
      {/* <LevelHolder level={10} percentage={70} size={32}/> */}
      <header></header>
      <main className="flex flex-1 transition-all duration-400">
        <section className="flex flex-col gap-4">
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
