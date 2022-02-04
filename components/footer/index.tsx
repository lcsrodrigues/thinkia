import React from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
    return (
        <div className={style.section}>
            {/* <div className={style.divOpacity}></div> */}
            <div className={style.container}>
                <div className={style.container_part}>
                    <h2>REDES SOCIAIS</h2>
                    <div className={style.navigation}>
                        <ul>
                            <li>
                                <a>WhatsApp</a>
                            </li>
                            <li>
                                <a>Linkedin</a>
                            </li>
                            <li>
                                <a>Instagram</a>
                            </li>
                            <li>
                                <a>Twitter</a>
                            </li>
                            <li>
                                <a>Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.container_part}>
                    <h2>EVENTOS</h2>
                    <div className={style.navigation}>
                        <ul>
                            <li>
                                <a>Lorem ipsum dolor sit amet</a>
                            </li>
                            <li>
                                <a>Curabitur suscipit</a>
                            </li>
                            <li>
                                <a>Curabitur nec malesuada quam, a suscipit risus</a>
                            </li>
                            <li>
                                <a>Vivamus eleifend ligula ac nibh placerat</a>
                            </li>
                            <li>
                                <a>Quisque consequat</a>
                            </li>
                            <li>
                                <a>Quisque sit amet</a>
                            </li>
                            <li>
                                <a>Aenean consequat varius magna</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.container_part}>
                    <h2>MENU</h2>
                    <div className={style.navigation}>
                        <ul>
                            <li>
                                <Link to="parceiros" spy={true} smooth={true} duration={1000}>Parceiros de Negócios</Link>
                            </li>
                            <li>
                                <Link to="contato" spy={true} smooth={true} duration={1000}>Contato</Link>
                            </li>
                            <li>
                                <Link to="solucoes" spy={true} smooth={true} duration={1000}>Soluções</Link>
                            </li>
                            <li>
                                <Link to="faleConosco" spy={true} smooth={true} duration={1000}>Fale Conosco</Link>
                            </li>
                            <li>
                                <Link to="testemunhos" spy={true} smooth={true} duration={1000}>Testemunhos</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className={style.sideLeft}>
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
                </div>*/}
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