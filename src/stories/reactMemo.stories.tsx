import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersHidden = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersHidden)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['aaa', 'nnn', 'ggg'])

    const AddUser = () => {
        const CopyUsers = [...users, 'XXXXXX'];
        setUsers(CopyUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={AddUser}>Add User</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

//при использовании UseState при каждом клике идет перерисовка всего компонента: и button и counter, Users, даже если в некоторых конпомнентах ничего не изменилось. (например Users - никак не изменится но переотрисуется)
//поэтому обернем Users в ReactMemo, который будет следить за его пропсами. И контейнерная компонента которую создал  ReactMemo не будет орисовывать UserHidden, если там ничего не изменилось - при клике счетчик увеличится а Users не будут переотрисовываться
