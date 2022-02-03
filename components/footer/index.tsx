import React from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';

export default function Footer() {
    return (
        <div className={style.section}>
            <div className={style.divOpacity}></div>
            <div className={style.container}>
                <div className={style.sideLeft}>
                    <div className={style.cheap}>
                        <ul>
                            <li>
                                <div className={style.card}>
                                    <img src='/linkedin.png' alt="linkedin" />
                                </div>
                            </li>
                            <li>
                                <div className={style.card}>
                                    <img src='/facebook.png' alt="facebook" />
                                </div>
                            </li>
                            <li>
                                <div className={style.card}>
                                    <img src='/twitter.png' alt="twitter" />
                                </div>
                            </li>
                            <li>
                                <div className={style.card}>
                                    <img src='/instagram.png' alt="instagram" />
                                </div>
                            </li>
                            <li>
                                <div className={style.card}>
                                    <img src='/whatsapp.png' alt="whatsapp" />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={style.sideRight}>

                    <div className={style.title}>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className={style.text}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, urna volutpat consectetur varius, sapien lorem mollis massa.</span>
                    </div>
                    <div className={style.actions}>
                        <input id={"iptEmail"} placeholder={"Seu e-mail aqui"} type={"email"} />
                        <Button text={"Submit"} />
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.footerLogo}>
                    <img src='/logo-01.png' />
                </div>
                <div className={style.footerContent}>
                    <span>ThinkIA Soluções em Tecnologia  |   Todos os direitos reservados</span>
                </div>
            </div>
        </div>
    )
}