import React, { type JSX } from "react";
import { useInterval } from "../hooks/useInterval";
import { SecondsToTime } from "../utils/SecondsToTime";

interface PomodoroTimerProps {
    PomodoroTime : number;
    shortRestTime : number;
    longRestTime : number;
    cycles : number;
    runing : boolean;
    className? : string
}

export default function PomodoroTimer({PomodoroTime , shortRestTime , longRestTime , cycles , runing , className = ""} : PomodoroTimerProps) : JSX.Element{
    const [mainTime , setMainTime] = React.useState<number>(PomodoroTime)

    useInterval(()=>{
        setMainTime( mainTime - 1)
    } , runing ? 1000 : null)

    return (
        <div className={className + "pomodoro-display"}>
            {SecondsToTime(mainTime)}
        </div>
    )
}