import React, { type JSX } from "react";
import { useInterval } from "../hooks/useInterval";
import { SecondsToTime } from "../utils/SecondsToTime";

interface PomodoroTimerProps {
    defaultPomodoroTime : number;
    className? : string
}

export default function PomodoroTimer({defaultPomodoroTime , className = ""} : PomodoroTimerProps) : JSX.Element{
    const [mainTime , setMainTime] = React.useState<number>(defaultPomodoroTime)

    useInterval(()=>{
        setMainTime( mainTime - 1)
    } , 1000)

    return (
        <div className={className + "pomodoro-display"}>
            {SecondsToTime(mainTime)}
        </div>
    )
}