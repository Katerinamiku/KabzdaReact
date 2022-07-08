import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff, //важно указать ЧТО тестируем
};

export const OnMode = () => <OnOff  on={true} onChange={action('clicked')} />
export const OffMode = () => <OnOff  on={false} onChange={action('clicked')} />

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
};
