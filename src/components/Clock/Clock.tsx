import {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";


type PropsType = {
    mode?: 'digital' | 'analog'
}


const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        {props.mode === 'digital'
            ? <DigitalClock date={date}/>
            : <AnalogClock date={date}/>
        }
    </>
}

export default Clock;

export type ClockType = {
    date: Date
}




