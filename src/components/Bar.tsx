import { clsx } from "clsx";

type BarProps = {
    percentage: number,
    colour: string
}


const Bar = (props: BarProps) => {
    const { percentage, colour } = props;

    const barStyle = {
        height: `${percentage}%`
    }

    const barBgClasses: Record<string,string> = {
        'green': 'bg-green-500',
        'red': 'bg-red-500',
        'blue': 'bg-blue-500'
    }
    
    return (
        <div className="h-40 flex items-end jusitfy-end">
            <div className={clsx(barBgClasses[colour], "w-14 rounded-xl border-2 border-black")} style={barStyle}>
            </div>
        </div>
    )
}

export default Bar;