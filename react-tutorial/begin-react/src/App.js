import React, { useRef, useState } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const {username, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'cheoljin',
      email: 'cheoljin@react.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
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

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
