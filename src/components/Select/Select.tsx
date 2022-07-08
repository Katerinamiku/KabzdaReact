import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElement] = useState(props.value)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    const ToggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        ToggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    let NextItem;
                    if (e.key === 'ArrowDown') {
                        NextItem = props.items[i + 1]
                    } else if (e.key === 'ArrowUp') {
                        NextItem = props.items[i - 1]
                    }

                    if (NextItem) {
                        props.onChange(NextItem.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={s.select}
             onKeyUp={onKeyUp}
             tabIndex={0}>
            <span className={s.main} onClick={ToggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={s.items}>
                    {props.items.map(i =>
                        <div className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                             onMouseEnter={() => {
                                 setHoveredElement(i.value)
                             }}
                             key={i.value}
                             onClick={() => {
                                 onItemClick(i.value)
                             }}>
                            {i.title}
                        </div>)}
                </div>}
        </div>
    )
}
