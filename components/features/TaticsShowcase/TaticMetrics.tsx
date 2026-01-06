import { ProgressiveData } from "../ProgressiveData";

type metricsObject = {
    title: string
    value: number
}

interface TaticMetricsProps {
    metrics: metricsObject[]
}

export function TaticMetrics({ metrics }: TaticMetricsProps) {
    return <div className="flex items-center gap-4 w-full ">
        {metrics.map(({title, value}) => (<ProgressiveData key={title} percentage={value} title={title} value={value} />))}
    </div>
}