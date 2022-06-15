import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onCollapse: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            title={props.titleValue}
            onCollapse={props.onCollapse}
            collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onCollapse: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={() => {props.onCollapse(props.collapsed)}}>{props.title}</h1>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}

export default Accordion
