import React, { Component, useState, useReducer } from 'react';

class Counter extends Component {
    // constructor를 활용해서 커스텀 메소드에서 this를 사용할 때 bind 해준다.
    // constructor를 사용하지 않는다면 커스텀 메소드를 화살표 함수로 작성하는 방법이 있다.
    // constructor(props) {
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    // class properties의 문법을 사용하는 것으로도 가능하다.
    // state = {
    //     counter: 0
    // }

    // 상태 초기화
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            fixed: 1,
            updateMe: {
                toggleMe: false,
                dontChangeMe: 1,
            }
        };
    }

    handleIncrease = () => {
        console.log('increase');
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleDecrease = () => {
        console.log('decrease');
        this.setState({
            counter: this.state.counter - 1
        });
    }

    // 객체 안의 객체를 update할 때는 불변성 유지를 해줘야함
    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe,
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);

//     // number라는 값을 0으로 초기화하겠다.
//     // setNumber(): 초기화된 값을 바꿔주는 함수
//     // const [number, setNumber] = useState(0);

//     const onIncrease = () => {
//         console.log('+1');
//         //setNumber(number + 1);
//         // 업데이터 함수: 리액트 성능 최적화와 관련이 있다.
//         // setNumber(prevNumber => prevNumber + 1);

//         // useReduce 사용
//         dispatch({
//             type: 'INCREMENT'
//         });
//     };
//     const onDecrease = () => {
//         console.log('-1');
//         //setNumber(number - 1);
//         // 업데이터 함수: 리액트 성능 최적화와 관련이 있다.
//         // setNumber(prevNumber => prevNumber - 1);

//         // useRedece 사용
//         dispatch({
//             type: 'DECREMENT'
//         });
//     };
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }

export default Counter;