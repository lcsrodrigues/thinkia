import React, { useEffect, useState, useRef } from 'react';
import { CardModel04 } from '../card/card';
import style from './style.module.scss';
import arrayTestemunho from './testemunhos.json';

export default function Section06() {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <div id="testemunhos" className={style.section}>
            <div className={style.title}>
                <span><strong>TESTEMUNHOS</strong></span>
            </div>
            <div className={style.resume}>
                <p>Leia de quem confiou em nossos serviços.</p>
            </div>
            <div className={style.boxCard}>
                <div className={style.carousel} ref={carousel}>
                    {
                        arrayTestemunho &&
                        arrayTestemunho.map((testemunho, index) => {
                            return <CardModel04 key={index} office={testemunho.office} signature={testemunho.signature} title={testemunho.title} description={testemunho.description} pathImg={testemunho.pathImg} />
                        })
                    }
                </div>
                <div className={style.buttons}>
                    <button onClick={handleLeftClick}>
                        <img src="./arrow.png" alt="Scroll Left" />
                    </button>
                    <button onClick={handleRightClick}>
                        <img src="./arrow.png" alt="Scroll Right" />
                    </button>
                </div>
            </div>
        </div>
    )
}