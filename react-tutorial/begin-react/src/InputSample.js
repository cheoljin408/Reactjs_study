import React, {useState, useRef} from 'react';

function InputSample() {
    // inputs를 객체를 이용해서 관리한다.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    // name과 nickname을 inputs객체에서 비구조화 할당을 이용해 추출한다.
    const {name, nickname} = inputs;

    // useRef를 사용하여 name을 입력하는 Input과 연결할 변수를 선언한다.
    const nameInput = useRef();

    // 객체 상태를 업데이트 할 때는 기존의 상태를 한 번 복사하고 복사한 상태에서 특정 값을 덮어 씌운다. -> 불변성을 지킨다.
    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
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
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
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