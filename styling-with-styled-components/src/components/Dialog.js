import React from 'react';
import Button from './Button.js';
import styled from 'styled-components';

const DarkBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;

    h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    p {
        font-size: 1.125rem;
    }
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
    & + & {
        margin-left: 0.5rem;
    }
`;

function Dialog({
    title,
    children,
    confirmText,
    cancelText,
    visible,
    onConfirm,
    onCancel,
}) {
    if (!visible) {
        return null;
    }

    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray" onClick={onConfirm}>
                        {confirmText}
                    </ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onCancel}>
                        {cancelText}
                    </ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaultProps = {
    confirmText: '확인',
    cancelText: '취소',
};

export default Dialog;
