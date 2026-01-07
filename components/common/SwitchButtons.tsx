import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { Icon } from "./Icon"
import { Button } from "./Button"


interface SwitchButtonsProps {
    onUpClick: () => void
    onDownClick: () => void
}

export function SwitchButtons({onUpClick, onDownClick}: SwitchButtonsProps)  {
    return <div className="flex flex-col items-center justify-center">
        <Button onClick={onUpClick}>
            <Icon icon={BiChevronUp} />
        </Button>
        <Button onClick={onDownClick}>
            <Icon icon={BiChevronDown} />
        </Button>
    </div>
}