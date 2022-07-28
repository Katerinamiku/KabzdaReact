import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/ControlledAccordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/ControlledRating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(false)

    const items = [{title:'x', value: 1}, {title: 'y', value: 2}, {title: 'z', value: 3}, {title:'e', value: 4}]


    return (
        <div className="App">

            {/*<SelfAccordion titleValue={"Menu"}/>*/}
            {/*<SelfRating />*/}
            {/*<SelfOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            <Accordion titleValue={"Menu"}
                       items={items}
                       collapsed={accordeonCollapsed}
                       onCollapse={() => {setAccordeonCollapsed(!accordeonCollapsed)}}
                       onClick={()=>alert('111')}
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>


            {/*<Select titleValue={'MySelect'}*/}
            {/*        items={items}*/}
            {/*        collapsed={selectCollapsed}*/}
            {/*        onCollapse={()=>{setSelectCollapsed(!selectCollapsed)}}*/}
            {/*        onClick={()=>alert('111')}*/}
            {/*/>*/}
        </div>
    );
}

type AppTitleType = {
    title: string
}

function AppTitle(props: AppTitleType) {
    return <h1>{props.title}</h1>}

export default App;
