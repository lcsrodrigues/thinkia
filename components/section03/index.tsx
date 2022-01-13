import React from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';

export default function Section03() {
    return (
        <div className={style.section} id="contato">
            <div className={style.divOpacity}></div>
            <div className={style.container}>
                <div className={style.title}>
                    <span>CONTATO</span>
                </div>
                <div className={style.text}>
                    <span>Entre em contato conosco para receber informações detalhadas das nossas soluções ou solicitar uma proposta.</span>
                </div>
                <div className={style.actions}>
                    <input id={"iptEmail"} placeholder={"Seu e-mail aqui"} type={"email"} />
                    <Button text={"Enviar"} />
                </div>
            </div>
        </div>
    )
}