import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
        let fake = 0;
        while (fake < 10000000) {
            fake++;
            const fakeValue = Math.random();
        }
        tempResultA *= i;
    }
    return tempResultA;
}, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

//мы усложнили функцию а, но даже при изменении только функции б а все равно пересчтывается и переотрисовывается,
// хотя не нужно - грузит систему когда не надо. Нужен ктото кто запомнит а, чтобы его не переотрисовывать
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>result for a: {resultA} </div>
        <div>result for b: {resultB} </div>
    </>
}
//-------------------useMemo-------------------------

const UsersHidden = (props: { users: Array<string> }) => {
    console.log('usersHidden')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersHidden)


export const HelpingReactMemo = () => {
    console.log('Helping')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['aaa', 'nnn', 'ggg', 'jhjaajhj'])

    const newArray = useMemo(() => {
        const newUsersArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newUsersArray;
    }, [users]);

    const AddUser = () => {
        const CopyUsers = [...users, 'XXXXAXX'];
        setUsers(CopyUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() =>AddUser()}>Add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}
//------------------UseCallback--------------


export const UseCallbackLikeReactMemo = () => {
    console.log('Like UseMemo UseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['story', 'roman', 'detective'])


    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const CopyBooks = [...books, 'Angular'];
    //         setBooks(CopyBooks)
    //     }}, [books])

    const memoizedAddBook2 = useCallback(()=> {
        console.log(books)
        const CopyBooks = [...books, 'Angular'];
        setBooks(CopyBooks)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book  addBook={memoizedAddBook2}/>
    </>
}

type BookHiddenPropsType = {
    addBook: ()=>void
}

const BooksHidden = (props: BookHiddenPropsType) => {
    console.log('booksHidden')
    return <div>
        <button onClick={() =>props.addBook()}>Add book</button>
    </div>
}

const Book = React.memo(BooksHidden)
