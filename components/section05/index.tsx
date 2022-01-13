import React from 'react';
import { CardModel03 } from '../card/card';
import style from './style.module.scss';


export default function Section05() {
    return (
        <div id="contato" className={style.section}>
            <div className={style.title}>
                <span><strong>ALGUMA PERGUNTA? FALE CONOSCO</strong></span>
            </div>
            <div className={style.resume}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nulla. Cras massa urna, luctus consectetur sem a, tincidunt venenatis elit. Suspendisse potenti. Nunc laoreet in justo et porttitor. Quisque ac rutrum sapien, sit amet mattis diam. Integer id felis iaculis, vulputate est ut, egestas mi. Sed in accumsan nulla, eu sagittis felis.</p>
            </div>
            <div className={style.boxCard}>
                <CardModel03 title={"FALE CONOSCO"} description={"(021) 3078-2222"} pathImg={"/phone-call.png"} />
                <CardModel03 title={"SUPORTE"} description={"suporte@2r.com.br"} pathImg={"/checkbox.png"} />
                <CardModel03 title={"ENDEREÇO"} description={"Av. Rio Branco, 131, 19° andar, Centro Rio de Janeiro - RJ"} pathImg={"/tool.png"} />
                <CardModel03 title={"EMAIL"} description={"comercial@2r.com.br"} pathImg={"/email.png"} />
            </div>
        </div>
    )
}