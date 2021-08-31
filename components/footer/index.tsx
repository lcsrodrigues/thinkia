import React from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';

export default function Footer() {
    return (
        <div className={style.section}>
            <div className={style.divOpacity}></div>
            <div className={style.container}>
                <div className={style.title}>
                    <span>Lorem Ipsum</span>
                </div>
                <div className={style.text}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, urna volutpat consectetur varius, sapien lorem mollis massa.</span>
                </div>

                <div className={style.actions}>
                    <input id={"iptNome"} placeholder={"Seu nome aqui"} type={"text"} />
                    <input id={"iptEmail"} placeholder={"Seu e-mail aqui"} type={"email"} />
                    <Button text={"Submit"} />
                </div>

            </div>
        </div>
    )
}