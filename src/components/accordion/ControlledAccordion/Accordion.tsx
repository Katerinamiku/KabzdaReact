import React, {ChangeEvent} from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onCollapse: () => void
    items: Array<ItemType>
    onClick: (value: any)=>void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            title={props.titleValue}
            onCollapse={props.onCollapse}
            />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onCollapse: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={(e) =>props.onCollapse()}>{props.title}</h2>
    )
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
        return (<ul>
            {
                props.items.map((i, index) => <li key={index} onClick={()=>{props.onClick(i.value)}}>{i.title}</li>)
            }
        </ul>)
}


