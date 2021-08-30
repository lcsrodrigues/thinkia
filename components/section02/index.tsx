import React from 'react';
import Card from '../card/card';
import style from './style.module.scss';

export default function Section02() {
    return (
        <div className={style.section}>
            <div className={style.title}>
                <span>Título</span>
            </div>
            <div className={style.boxCard}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}