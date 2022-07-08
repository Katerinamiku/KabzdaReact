import React from 'react';

import {SelfOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'SelfOnOff stories',
    component: SelfOnOff, //важно указать ЧТО тестируем
};

const callback = action('ModeChanged')

export const ChangingOnMode = () => {
    return <SelfOnOff onChange={callback}/>
};
export const ChangingOffMode = () => {
    return <SelfOnOff onChange={callback}/>
};
