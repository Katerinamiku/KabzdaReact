import React from 'react';
import {ClockType} from "./Clock";

export const DigitalClock = (props: ClockType) => {
    const getProperString = (number: number) => number < 10 ? "0" + number : number;

    return <div>
        <span>{getProperString(props.date.getHours())}</span>
        :
        <span>{getProperString(props.date.getMinutes())}</span>
        :
        <span>{getProperString(props.date.getSeconds())}</span>
    </div>
}



