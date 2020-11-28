import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
    children: React.ReactNode;
    onClick: (e: any) => void;
};

const StyledButton = styled.button`
    background-color: #c45c5c;
    outline: none;
    padding: 8px 16px;
    border: none;
    border-radius: 10px;

    &:active {
        background-color: #ee4545;
    }
`;

export const Button = ({ onClick, children }: Props) => (
    <StyledButton onClick={onClick} type="button">
        {children}
    </StyledButton>
);
