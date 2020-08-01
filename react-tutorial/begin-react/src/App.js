import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';
import useInputs from './useInputs.js';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

// inputs, users 상태 정의 (reducer 사용)
const initialState = {
  users: [
    {
      id: 1,
      username: 'cheoljin',
      email: 'cheoljin@react.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ],
};

// reducer 함수 정의
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? { ...user, active: !user.active } : user)
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      //return state;
      throw new Error('Unhandled action');
  }
}

// createContext 사용
export const UserDispatch = createContext(null);

function App() {
  // state는 현재 상태이고, dispatch는 액션을 발생시키는 함수
  // useReducer의 첫 번째 파라미터는 reducer 함수, 두 번째 파라미터는 처음상태 정의해 놓은 객체
  const [state, dispatch] = useReducer(reducer, initialState);

  // 위의 코드에서 state에는 initialState의 값이 들어가면서 inputs와 users가 들어가 있다.
  // state에 있는 값들을 비구조화 할당으로 추출하고 컴포넌트에게 props로 전달한다. 
  const { users } = state;

  // useInputs 사용
  const [form, onChange, reset] = useInputs({
    username: '',
    email: ''
  });

  // username, email 추출
  const {username, email} = form;

  const nextId = useRef(4);



  // onCreate 메소드
  const onCreate = useCallback(e => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  // count 메소드
  const count = useMemo(() => {
    countActiveUsers(users);
  }, [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
