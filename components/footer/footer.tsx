import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';

export default function Footer() {
    return(
        <div>
            <footer className={style.footer}>
                <img src={"/logo-01.jpg"}></img>
                    <div className={style.redessociais} >
                
                    <img src={"/logo-facebook-branco.svg"}></img>
                
                
                    <img src={"/logo-instagram-branco.svg"}></img>
                
                
                    <img className={style.imgIn} src={"/LinkedIn-Icon-White-Logo.svg"}></img>
                
                    </div>
                <div className={style.informacoes} >       
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p>+55 (00) 00000-0000</p>
                    <span>© Copyright 2021 | Todos os direitos reservados ThinkIA </span>
                </div>
            </footer>
        </div>
    )
}