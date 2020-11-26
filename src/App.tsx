import React from 'react';
import { observer } from 'mobx-react-lite';
import { Counter } from './components/Counter';

export const App: React.FC = observer(() => {
    return (
        <>
            <h1>React MST boilerplate</h1>
            <Counter />
        </>
    );
});
