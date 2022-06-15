import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function SelfAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClickHandler={()=>setCollapsed(!collapsed)}
        />
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={() => {props.onClickHandler()}}>--{props.title}--</h2>
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

export default SelfAccordion
