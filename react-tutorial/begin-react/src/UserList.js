import React from 'react';

// 하나의 컴포넌트에서 여러개의 컴포넌트를 만들 수 있다.
function User({ user, onRemove, onToggle }) {
    const {username, email, id, active} = user;
    return (
        <div>
            <b style={{
                color: active ? "green" : "black",
                cursor: "pointer"
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                // 배열 내장함수 map을 이용하여 객체형태의 배열인 변수를 컴포넌트 엘리먼트 형태의 배열로 변환을 해준다.
                users.map(
                    (user) => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;