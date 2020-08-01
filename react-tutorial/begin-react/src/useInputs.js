import { useState, useCallback } from 'react';

// 파라미터 -> 해당input form에서 관리할 초기값
function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    // onChange 메소드
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }));
    }, []);

    // reset 메소드
    const reset = useCallback(() => {
        setForm(initialForm);
    }, [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;