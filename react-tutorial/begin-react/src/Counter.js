import React, { useState, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    // number라는 값을 0으로 초기화하겠다.
    // setNumber(): 초기화된 값을 바꿔주는 함수
    // const [number, setNumber] = useState(0);

    const onIncrease = () => {
        console.log('+1');
        //setNumber(number + 1);
        // 업데이터 함수: 리액트 성능 최적화와 관련이 있다.
        // setNumber(prevNumber => prevNumber + 1);

        // useReduce 사용
        dispatch({
            type: 'INCREMENT'
        });
    };
    const onDecrease = () => {
        console.log('-1');
        //setNumber(number - 1);
        // 업데이터 함수: 리액트 성능 최적화와 관련이 있다.
        // setNumber(prevNumber => prevNumber - 1);

        // useRedece 사용
        dispatch({
            type: 'DECREMENT'
        });
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;