import {reducer, Statetype, TOGGLE_CONSTANT} from "./reducer";


test('collapsed should be true', ()=> {
const state: Statetype = {
    collapsed: false
}
const newState = reducer(state, {type: TOGGLE_CONSTANT})

expect(newState.collapsed).toBe(true)

})

test('collapsed should be false', ()=> {
    const state: Statetype = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false)

})

test('reducer should throw error because of incorrect action type', ()=> {
    const state: Statetype = {
        collapsed: false
    }

    expect(()=>{
        reducer(state, {type: 'FAKE_TYPE'})
    }).toThrowError();

})
