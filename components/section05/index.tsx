import React from 'react';
import { CardModel03 } from '../card/card';
import style from './style.module.scss';


export default function Section05() {
    return (
        <div id="faleConosco" className={style.section}>
            <div className={style.title}>
                <span><strong>ALGUMA PERGUNTA? FALE CONOSCO</strong></span>
            </div>
            <div className={style.resume}>
                <p>Nossos departamentos estão a sua disposição para questões comerciais assim como novos projetos e suporte técnico. Utilize um dos nossos canais abaixo e teremos prazer em atendê-lo! </p>
            </div>
            <div className={style.boxCard}>
                <CardModel03 title={"FALE CONOSCO"} description={"(021) 3589-9055"} pathImg={"/phone-call.png"} />
                <CardModel03 title={"SUPORTE"} description={"suporte@thinkia.com.br"} pathImg={"/checkbox.png"} />
                <CardModel03 title={"ENDEREÇO"} description={"Rua Maria Mendes Vechi 270, Sala 7, Centro, Mesquita RJ - 26553-070"} pathImg={"/tool.png"} />
                <CardModel03 title={"EMAIL"} description={"comercial@thinkia.com.br"} pathImg={"/email.png"} />
            </div>
        </div>
    )
}