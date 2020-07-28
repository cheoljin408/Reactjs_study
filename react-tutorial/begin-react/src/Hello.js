import React from 'react';

function Hello({color, name, isSpecial, booleanDefaultIsTrue}) {
    console.log(booleanDefaultIsTrue);
    return (
        <div style={{
            color: color,
        }}>
            {isSpecial ? <b>*</b> : null}
            {/* isSpecial && <b>*</b> */}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: 'No Name'
};

export default Hello;