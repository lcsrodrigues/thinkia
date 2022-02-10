import React from 'react';
import { CardModel02 } from '../card/card';
import style from './style.module.scss';
const conteudos = require('./conteudos.json');

export default function Section04() {
    return (
        <div className={style.section} id="solucoes">
            <div className={style.title}>
                <span><strong>SOLUÇÕES</strong></span>
            </div>
            <div className={style.resume}>
                <p>São nestes pilares de atuação, em que oferecemos soluções em conjunto com nossos parceiros de negócios e equipe altamente qualificada.</p>
            </div>
            <div className={style.boxCard}>
                {
                    conteudos.map((conteudo, index) => {
                        return (
                            <CardModel02 title={conteudo.title} description={conteudo.description} pathImg={conteudo.pathUrl} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}