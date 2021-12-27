import React from 'react';
import { CardModel01 } from '../card/card';
import style from './style.module.scss';

export default function Section02() {
    return (
        <div id="empresa" className={style.section}>
            <div className={style.title}>
                <span>Título</span>
            </div>
            <div className={style.boxCard}>
                <CardModel01 pathImg={"/logo-parceiro-01.png"} />
                <CardModel01 pathImg={"/logo-parceiro-02.png"} />
                <CardModel01 pathImg={"/logo-parceiro-03.png"} />
                <CardModel01 pathImg={"/logo-parceiro-04.png"} />
                <CardModel01 pathImg={"/logo-parceiro-05.png"} />
                <CardModel01 pathImg={"/logo-parceiro-06.png"} />
            </div>
        </div>
    )
}