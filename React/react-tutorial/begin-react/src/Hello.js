import React from 'react';

//컴포넌트는 대문자로 시작!
function Hello({ color, name, isSpecial }) {
    return (
        <div style={{
            color: color
        }}>
            {/*{isSpecial ? <b>*</b> : null}*/}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;