import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/ControlledAccordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/ControlledRating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import SelfAccordion from "./components/accordion/UncontrolledAccordion/SelfAccordion";
import {SelfRating} from "./components/Rating/UncontrolledRating/SelfRating";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapsed, setAccordeonCollapsed] = useState(false)
    const onCollapse = (collapsed: boolean) => {
      setAccordeonCollapsed(!collapsed)
    }

    return (
        <div className="App">
            <OnOff/>
            {/*<SelfAccordion titleValue={"Menu"}/>*/}
            {/*<SelfRating />*/}
            <Accordion titleValue={"Menu"} collapsed={accordeonCollapsed}
                       onCollapse={onCollapse}/>
            {/*<Accordion titleValue={"Users"} collapsed={accordeonCollapsed}*/}
            {/*           onCollapse={setAccordeonCollapsed}/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

        </div>
    );
}

type AppTitleType = {
    title: string
}

function AppTitle(props: AppTitleType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
