import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from './Select';

export default {
    title: 'Select stories',
    component: Select,
};

export const ValueSelect = () => {
    const [value, setValue] = useState(2)

    return (
        <Select onChange={setValue}
                    value={value}
                    items={[
                        {title: 'XXXXX', value: 1},
                        {title: 'YYYYY', value: 2},
                        {title: 'ZZZZZ', value: 3},
                        {title: 'EEEEE', value: 4}
                    ]}
        />
    )
}
export const WithoutValueSelect = () => {
    const [value, setValue] = useState(null)
    return (
        <Select onChange={setValue}
                value={value}
                    items={[
                        {title: 'XXXXX', value: 1},
                        {title: 'YYYYY', value: 2},
                        {title: 'ZZZZZ', value: 3},
                        {title: 'EEEEE', value: 4}
                    ]}
    />)
}
