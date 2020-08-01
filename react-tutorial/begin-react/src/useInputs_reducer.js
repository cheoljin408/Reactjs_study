import { useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            };
        case 'RESET':
            console.log(Object.keys(state));
            return Object.keys(state).reduce((acc, current) => {
                console.log(acc);
                console.log(current);
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    // onChange 메소드
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET',
        });
    }, []);

    return [form, onChange, reset];
}

export default useInputs;