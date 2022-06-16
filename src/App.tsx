import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/ControlledAccordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/ControlledRating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfOnOff} from './components/OnOff/UncontrolledOnOff'
import SelfAccordion from "./components/accordion/UncontrolledAccordion/SelfAccordion";
import {SelfRating} from "./components/Rating/UncontrolledRating/SelfRating";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">

            {/*<SelfAccordion titleValue={"Menu"}/>*/}
            {/*<SelfRating />*/}
            <SelfOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<OnOff on={switchOn} onChange={(on) => {*/}
            {/*    setSwitchOn(on)*/}
            {/*}}/>*/}
            <Accordion titleValue={"Menu"} collapsed={accordeonCollapsed}
                       onCollapse={() => {
                           setAccordeonCollapsed(!accordeonCollapsed)
                       }}/>

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
