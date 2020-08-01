import React, { createContext, useContext, useState } from 'react';

// context에서 사용할 기본 값을 설정해준다.
const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요 {text}</div>
}

function Parent() {
    return <Child />
}

function GrandParent() {
    return <Parent />
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return (
        // MyContext.Provider를 통해서 value를 설정해준다.
        <MyContext.Provider value={value ? "GOOD" : "BAD"}>
            <GrandParent />
            <button onClick={() => setValue(!value)}>Toggle</button>
        </MyContext.Provider>
    );
}

export default ContextSample;