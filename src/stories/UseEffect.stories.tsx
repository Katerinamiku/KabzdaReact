import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}


export const SimpleExample1 = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExp')

    useEffect(() => {

        console.log('useEffect every render');
        document.title = counter.toString();
    })

    useEffect(() => {

        console.log('useEffect only first render');
        document.title = counter.toString();
    }, [])

    useEffect(() => {

        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(counter + 1)}>fake +</button>
    </>
}

export const SetTimeout = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SetTimeot Exp')

    useEffect(() => {

        setTimeout(() => {
            console.log('setTimeout');
            document.title = counter.toString();
        }, 1000);
    }, [counter])


    return <>
        Hello {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(counter + 1)}>fake +</button>
    </>
}


export const SetInterval = () => {

    const [counter, setCounter] = useState(1)
    console.log('SetInt Exp')

    useEffect(() => {

        setInterval(() => {
            setCounter((state)=>state+1)
        }, 1000);
    }, [])


    return <>
        Hello counter - {counter}
    </>
}
