import React from 'react';
import style from './style.module.scss';

type IButton = {
    color?: string,
    text: string,
    icon?: string;
}

export function Button({ color, text, icon }: IButton) {
    return (
        <div className={style.button}>{text}</div>
    )
}