import React, {type JSX } from "react";
import { useInterval } from "../hooks/useInterval";
import { SecondsToTime } from "../utils/SecondsToTime";
import type { TimeReducerAction } from "../App";

interface PomodoroTimerProps {
    time : number;
    setTimeFunc : React.Dispatch<TimeReducerAction>;
    runing : boolean;
    className? : string
}

export default function PomodoroTimer({time , setTimeFunc ,  runing , className = ""} : PomodoroTimerProps) : JSX.Element{

    useInterval(()=>{
        setTimeFunc({type : "decrement"})
    } , runing ? 1000 : null)

    return (
        <div className={className + "pomodoro-display"}>
            {SecondsToTime(time)}
        </div>
    )
}