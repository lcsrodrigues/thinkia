import React from 'react';
import { CardModel01 } from '../card/card';
import style from './style.module.scss';

export default function Section02() {
    return (
        <div className={style.section} id="parceiros">
            <div className={style.title}>
                <span>NOSSOS PARCEIROS</span>
            </div>
            <div className={style.boxCard}>
                <CardModel01 pathImg={"/OneTrustLogo.png"} />
                <CardModel01 pathImg={"/huawei.png"} />
                <CardModel01 pathImg={"/senha-segura.png"} />
                <CardModel01 pathImg={"/zoom.png"} />
                <CardModel01 pathImg={"/veeam.png"} />
                <CardModel01 pathImg={"/ruckus.png"} />
            </div>
        </div>
    )
}