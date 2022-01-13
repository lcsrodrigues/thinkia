import React from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';

export default function Section01() {
    return (
        <div className={style.section} id="empresa">
            <div className={style.title}>
                <span>EMPRESA</span>
            </div>
            <div className={style.text}>
                <p>Empresa especializada em Segurança da Informação e inteligência digital, constituída em 2018, por profissionais dedicados à Tecnologia. Sempre à procura de parcerias sólidas, com players e soluções líderes de mercado, para oferecer o melhor, com inovação, tecnologia e segurança.</p>
                <p>Nossa missão é ajudar nossos clientes a resolver suas dores, com segurança e eficiência, e ser uma empresa sólida e reconhecida em serviços e plataformas inovadoras.</p>
                <p>Sempre atualizados no mercado, estamos constantemente desenvolvendo projetos e soluções em TI para empresas de segmentos diversos. Com processos de resposta a incidentes e continuidade de negócios, gestão de riscos e vulnerabilidades, proteção de perímetros on premises e cloud, zero trust e desenvolvimento seguro.</p>
                <p>A ThinkIA tem como planos para o futuro se tornar referência no mercado de inteligência, proteção digital de dados com soluções próprias e parceiros qualificados.</p>
            </div>
            {/* <div className={style.actions}>
                <Button text={"Submit"}/>
            </div> */}
        </div>
    )
}