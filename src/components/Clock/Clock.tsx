import {useEffect, useState} from "react";

type PropsType = {}

const getProperString = (number: number) => number < 10 ? "0" + number : number;

const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setDate(new Date())
        }, 1000)

        return ()=> {
            clearInterval(intervalId)
        }
    }, [])

    return <div>
        <span>{getProperString(date.getHours())}</span>
        :
        <span>{getProperString(date.getMinutes())}</span>
        :
        <span>{getProperString(date.getSeconds())}</span>
    </div>
}

export default Clock;
