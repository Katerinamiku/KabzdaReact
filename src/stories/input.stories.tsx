import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Input stories',
    // component: input
};

//-----------------Fixed - cant change=--------------
export const FixedControlledInput = () => <input value={'kate'}/>
//---------------------just input--------------------
export const UncontrolledInput = () => <input/>
//---------------------onChange----------------------
export const TrackedValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return (
        <>
            <input value={value} onChange={onChange}/>
            {value}
        </>
    )
}
//-------------------------Ref-----------------------
export const GetValueByButtonUncontrolled = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const Save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={Save}>save</button>
            -- actual value: {value}
        </>
    )
}
//-----------------Controlled input------------------
export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)}
    return <input value={parentValue} onChange={onChangeHandler}/>
}
//----------------Controlled checkbox----------------
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)}
    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}
//-----------------Controlled  Select----------------
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
    </select>
}
