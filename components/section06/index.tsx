import React, { useEffect } from 'react';
import { CardModel04 } from '../card/card';
import style from './style.module.scss';

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
                <CardModel04 title={"FALE CONOSCO"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit vehicula elit at gravida. Aenean consequat varius magna, vitae mattis ante convallis sed. Duis a nulla at lectus consectetur venenatis. Curabitur nec malesuada quam, a suscipit risus. Vivamus eleifend ligula ac nibh placerat, a maximus dolor condimentum. Quisque consequat felis et magna auctor, volutpat vestibulum turpis dignissim. Ut vel ornare justo. Quisque sit amet vulputate erat. Nulla facilisi."} pathImg={"/perfil-01.jpg"} />
                <CardModel04 title={"SUPORTE"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit vehicula elit at gravida. Aenean consequat varius magna, vitae mattis ante convallis sed. Duis a nulla at lectus consectetur venenatis. Curabitur nec malesuada quam, a suscipit risus. Vivamus eleifend ligula ac nibh placerat, a maximus dolor condimentum. Quisque consequat felis et magna auctor, volutpat vestibulum turpis dignissim. Ut vel ornare justo. Quisque sit amet vulputate erat. Nulla facilisi."} pathImg={"/perfil-02.jpg"} />
                <CardModel04 title={"ENDEREÇO"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit vehicula elit at gravida. Aenean consequat varius magna, vitae mattis ante convallis sed. Duis a nulla at lectus consectetur venenatis. Curabitur nec malesuada quam, a suscipit risus. Vivamus eleifend ligula ac nibh placerat, a maximus dolor condimentum. Quisque consequat felis et magna auctor, volutpat vestibulum turpis dignissim. Ut vel ornare justo. Quisque sit amet vulputate erat. Nulla facilisi."} pathImg={"/perfil-03.jpg"} />
            </div>
        </div>
    )
}