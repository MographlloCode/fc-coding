import { Player } from "./FieldPlayer"
import { PitchLines } from "./PitchLines"
import { TACTICAL_SCHEMES } from "../TaticsShowcase/constants/taticsData"

export function FootballField() {
    const activeScheme = TACTICAL_SCHEMES[0]

    return <div className="flex flex-col gap-4 items-center w-full">
        <div className="relative w-full aspect-500/740 bg-zinc-900 mx-auto overflow-hidden border border-zinc-700 rounded-xl shadow-2xl">
            <PitchLines className="absolute inset-0 w-full h-full *:text-zinc-700 opacity-80" />
            <div className="absolute inset-0">
                {activeScheme.slots.map((slot, index) => (
                    <Player key={`${activeScheme.id}-${index}`} x={slot.pos.x} y={slot.pos.y} playerName={slot.defaultPlayer} role={slot.role} />
                ))}
            </div>
        </div>
    </div>
}