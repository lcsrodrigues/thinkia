import React from 'react';
import style from './style.module.scss';

type IButton = {
    _color?: string,
    _text: string,
    _icon?: string;
    _name?: string;
    _email?: string;
    saveInformation?: Function;
}

export function Button({ _color, _text, _icon, _name, _email, saveInformation }: IButton) {

    return (
        <div style={{ background: _color == null ? "" : _color }} className={style.button} onClick={() => saveInformation(_email, _name)}> {_text}</div >
    )
}