import React from 'react';

// 하나의 컴포넌트에서 여러개의 컴포넌트를 만들 수 있다.
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    );
}

function UserList() {
    const users = [
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
    ];

    return (
        <div>
            {
                // 배열 내장함수 map을 이용하여 객체형태의 배열인 변수를 컴포넌트 엘리먼트 형태의 배열로 변환을 해준다.
                users.map(
                    (user) => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    );
}

export default UserList;