import React , {useState} from 'react';

function Counter() {
    {/* 배열 비구조화 할당으로 useState의 첫번쩨 원소를 nmber, 두 번째 원소를 setNumber로 할당!*/}
    {/* number라는 상태를 만드는데 이 상태의 기본값은 0응로 하겠다.*/}
    {/* setNumber는 상태 number를 바꿔주는 함수!*/}
    const [number, setNumber] = useState(0);

    {/* 원래 위 한줄 짜리 코드는 밑의 코드처럼 써야하는데 비구조화 할당으로 간단하게 작성 가능*/}
    {/*
    const numberState = useState(0);
    const number = numberState[0];
    const setNumber = numberState[1];
    */}

    const onIncrease = () => {
        console.log('+1');
        setNumber(number+1);
        // 최적화를 하는 방법은 함수형 업데이트
        // setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        console.log('-1');
        setNumber(number-1);
        // 최적화를 하는 방법은 함수형 업데이트
        // setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;