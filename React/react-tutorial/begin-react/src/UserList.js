import React from 'react';

// user를 props로 가져오는 컴포넌트 새로 만들기
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {
    return (
        <div>
            {/* user 컴포넌트 만들어서 활용하기 */}
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}

            {
                users.map(
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;