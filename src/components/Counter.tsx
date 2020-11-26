import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../models/Root';

export const Counter: React.FC = observer(() => {
    const { counter } = useMst();
    return <p onClick={counter.increment}>{counter.count}</p>;
});
