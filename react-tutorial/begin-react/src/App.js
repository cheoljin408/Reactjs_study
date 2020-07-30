import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //배열을 복사하는 방법은 두 가지: 스프레드함수 사용, concat 함수 사용
    setUsers([...users, user]);
    // setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => (user.id !== id)))
  };

  const onToggle = (id) => {
    setUsers(users.map(user => (user.id === id) ? { ...user, active: !user.active } : user));
  };

  // useMemo를 사용하면 연산을 필요할 때만 할 수 있다.(최적화에 용이)
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
