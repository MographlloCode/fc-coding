import { LevelHolder } from "@/components/features/LevelHolder";
import { Sidebar, Tooltip } from "@components";

export default function Home() {
  return (<>
    <Sidebar/>
    <main className="flex-1 transition-all duration-400 ps-10 md:ps-12">
      <Tooltip title="teste" />
      <LevelHolder level={10} percentage={70} size={32}/>
    </main>
  </>);
}
