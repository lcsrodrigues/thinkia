import React from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';

export default function Section03() {
    return (
        <div id="solucoes" className={style.section}>
            <div className={style.divOpacity}></div>
            <div className={style.container}>
                <div className={style.title}>
                    <span>Lorem Ipsum Dolor Sit Amet Lorem</span>
                </div>
                <div className={style.text}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, urna volutpat consectetur varius, sapien lorem mollis massa.</span>
                </div>
                <div className={style.actions}>
                    <input id={"iptEmail"} placeholder={"Seu e-mail aqui"} type={"email"} />
                </div>
                <div className={style.formBtn} >
                    <Button text={"Submit"} />
                </div>
            </div>
        </div>
    )
}