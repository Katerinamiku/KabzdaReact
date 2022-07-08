import React from 'react';

import {SelfAccordion} from "./SelfAccordion";

export default {
    title: 'SelfAccordion stories',
    component: SelfAccordion, //важно указать ЧТО тестируем
};

export const ChangingCollapse = () => {
    return <SelfAccordion titleValue={'Collapsed title'}/>
};
