import React, {useState} from "react";

export default {
    title: 'useState demo',
}


export const Example1 = () => {
    console.log('ex1')
    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
 
