import React, { useEffect } from 'react';
import { CardModel04 } from '../card/card';
import style from './style.module.scss';
import arrayTestemunho from './testemunhos.json';

export default function Section06() {

    useEffect(() => {

    })

    return (
        <div id="testemunhos" className={style.section}>
            <div className={style.title}>
                <span><strong>TESTEMUNHOS</strong></span>
            </div>
            <div className={style.resume}>
                <p>Leia de quem confiou em nossos serviços.</p>
            </div>
            <div className={style.boxCard}>
                {
                    arrayTestemunho &&
                    arrayTestemunho.map((testemunho, index) => {
                        return <CardModel04 key={index} office={testemunho.office} signature={testemunho.signature} title={testemunho.title} description={testemunho.description} pathImg={testemunho.pathImg} />
                    })
                }
            </div>
        </div>
    )
}