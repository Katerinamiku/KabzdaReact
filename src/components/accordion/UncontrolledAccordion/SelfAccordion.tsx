import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function SelfAccordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer, {collapsed: false} )
    // let [collapsed, setCollapsed] = useState(false)
    // return <div>
    //     <AccordionTitle title={props.titleValue}
    //                     onClickHandler={() => setCollapsed(!collapsed)}
    //     />

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClickHandler={() => dispatch({type: TOGGLE_CONSTANT})}
        />
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={() => {
            props.onClickHandler()
        }}>--{props.title}--</h2>
    )
}

function AccordionBody() {
    console.log("AccBody rend")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}


