import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            // spread 문법으로 전에 있던 객체를 복사해 준 다음 새로운 값을 덮어쓰기 하는 방식
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input
            name='name'
            placeholder="이름"
            onChange={onChange}
            value={name}
            ref={nameInput}
            />
            <input
            name='nickname'
            placeholder="닉네임"
            onChange={onChange}
            value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;