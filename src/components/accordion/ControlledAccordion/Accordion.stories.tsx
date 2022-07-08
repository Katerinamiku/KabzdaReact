import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion, //важно указать ЧТО тестируем
};

const callback = action('accordion Mode changed')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion titleValue={'Collapsed Title'}
                                              collapsed={true} onCollapse={callback}
                                              onClick={onClickCallback}
                                              items={[{title:'x', value: 1}, {title:'y', value: 2}, {title:'z', value: 3} ]}/>
export const UncollapsedMode = () => <Accordion titleValue={'Uncollapsed Title'}
                                                collapsed={false} onCollapse={callback}
                                                onClick={onClickCallback}
                                                items={[{title:'x', value: 1}, {title:'y', value: 2}, {title:'z', value: 3} ]}/>

export const ChangingCollapse = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion titleValue={'Collapsed title'}
                      collapsed={collapsed}
                      onCollapse={()=>setCollapsed(!collapsed)}
                      items={[{title:'x', value: 1}, {title:'y', value: 2}, {title:'z', value: 3} ]}
                      onClick={(value)=> {alert('user with id ${value} clicked')}}/>
};
