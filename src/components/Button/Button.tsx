import * as React from 'react';

type Props = {
    children: any;
    onClick: (e: any) => void;
};

const styles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 15,
    padding: '3px 10px',
    margin: 10,
};

export const Button = ({ onClick, children }: Props) => (
    <button onClick={onClick} style={styles} type="button">
        {children}
    </button>
);
