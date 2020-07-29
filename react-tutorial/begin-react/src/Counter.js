import React, {useState} from 'react';

function Counter() {
    // number라는 값을 0으로 초기화하겠다.
    // setNumber(): 초기화된 값을 바꿔주는 함수
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        console.log('+1');
        //setNumber(number + 1);
        // 업데이터 함수: 리액트 성능 최적화와 관련이 있다.
        setNumber(prevNumber => prevNumber + 1);
    };
    const onDecrease = () => {
        console.log('-1');
        //setNumber(number - 1);
        // 업데이터 함수: 리액트 성능 최적화와 관련이 있다.
        setNumber(prevNumber => prevNumber - 1);
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