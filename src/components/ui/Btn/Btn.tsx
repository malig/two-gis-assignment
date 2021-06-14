import React, { FC } from 'react';

import './Btn.css';

type BtnProps = {
    ico?: string;
    onClick?: () => void;
}

export const Btn: FC<BtnProps> = (
    {
        children,
        ico= '',
        onClick = () => {}
    }
) => {
    return (
        <button className='btn' onClick={ onClick }>
            <span className='btn__text'>{ children }</span>
            <span className='btn__ico'>{ ico }</span>
        </button>
    )
}
