import React from 'react';

// 하나의 컴포넌트에서 여러개의 컴포넌트를 만들 수 있다.
const User = React.memo(function User({ user, onRemove, onToggle }) {
    const {username, email, id, active} = user;

    // useEffect에서 함수 인자가 호출되는 시점에서는 우리의 UI가 화면에 나타난 상태 이후다.
    // useEffect를 사용할 때는 첫 번째 파라미터에는 함수를 등록, 두 번째 파라미터에는 deps(배열)를 등록한다.
    // 그리고 return으로 어떤 특정 함수를 반환하게 되면 그 함수는 뒷정리 함수로서 업데이트 되기 전에 호출이 된다.
    // deps 배열이 빈 배열인 경우
    /*
    useEffect(() => {
        // props -> state
        // REST API
        // D3 Video.js
        // setInterval, setTimeout
        
        // 아래는 마운트 시점
        console.log('컴포넌트가 화면에 나타남');

        // return 에는 언마운트 시점
        return () => {
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []);
    */

    // deps 배열이 비어있지 않은 경우
    // useEffect에서 조회하고 있는 상태나 프롭스가 있다면 deps 배열에 넣어줘야 한다.
    /*
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);

        return () => {
            console.log('user 값이 바뀌기 전');
            console.log(user);
        }
    }, [user]);
    */

    // deps 배열이 생략된 경우
    /*
    useEffect(() => {
        console.log(user);
    });
    */
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
});

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

export default React.memo(UserList);