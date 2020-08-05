import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray
function Button({
    children,
    size,
    color,
    outline,
    fullWidth,
    className,
    ...rest
}) {
    // rest는 사용하기 전의 props들 이외의 props들을 가져온다.
    console.log(rest);
    return (
        <button
            className={classNames(
                'Button',
                size,
                color,
                {
                    outline,
                    fullWidth,
                },
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};
export default Button;
