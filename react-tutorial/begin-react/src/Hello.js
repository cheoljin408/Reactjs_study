import React ,{ Component }from 'react';

// Hello 컴포넌트를 class 컴포넌트로 만들어 보기
class Hello extends Component {
    static defaultProps = {
        name: '이름없음'
    };
    
    render () {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

// function Hello({color, name, isSpecial, booleanDefaultIsTrue}) {
//     console.log(booleanDefaultIsTrue);
//     return (
//         <div style={{
//             color: color,
//         }}>
//             {isSpecial ? <b>*</b> : null}
//             {/* isSpecial && <b>*</b> */}
//             안녕하세요 {name}
//         </div>
//     );
// }

// Hello.defaultProps = {
//     name: 'No Name'
// };

export default Hello;