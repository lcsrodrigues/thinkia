import React from 'react';
import { CardModel02 } from '../card/card';
import style from './style.module.scss';
const conteudos = require('./conteudos.json');

export default function Section04() {
    return (
        <div className={style.section} id="solucoes">
            <div className={style.title}>
                <span><strong>UNIDADE DE NEGÓCIOS</strong></span>
            </div>
            <div className={style.resume}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nulla. Cras massa urna, luctus consectetur sem a, tincidunt venenatis elit. Suspendisse potenti. Nunc laoreet in justo et porttitor. Quisque ac rutrum sapien, sit amet mattis diam. Integer id felis iaculis, vulputate est ut, egestas mi. Sed in accumsan nulla, eu sagittis felis.</p>
            </div>
            <div className={style.boxCard}>
                {
                    conteudos.map((conteudo, index) => {
                        return (
                            <CardModel02 description={conteudo.description} pathImg={conteudo.pathUrl} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}