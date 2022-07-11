type ActionType = {
    type: string
}

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"; // лучще использосать назхвания через переменные чтобы не ошибиться
export type Statetype ={
    collapsed: boolean
}

//-------пишем reducer-------
export const reducer = (state: Statetype, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error('Bad action type');
    }
    return state;
}
