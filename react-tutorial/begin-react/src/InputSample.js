import React, {useState} from 'react';

function InputSample() {
    // inputs를 객체를 이용해서 관리한다.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    // name과 nickname을 inputs객체에서 비구조화 할당을 이용해 추출한다.
    const {name, nickname} = inputs;
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
        })
    };
    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
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