import React from 'react';

function Hello({color, name}) {
    return <div style={{
        color: color,
    }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
    name: 'No Name'
};

export default Hello;