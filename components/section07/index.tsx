import React, { useEffect, useState, useRef } from 'react';
import style from './style.module.scss';
import arrayTestemunho from './E2E.json';
import { CardModel05 } from '../card/card';

export default function Section06() {

    return (
        <div className={style.processE2E}>
            <div className={style.title}>
                <h1>Processos End to End</h1>
            </div>
            <div className={style.deck}>
                <CardModel05 title={"Strategy management"} pathImg={"./imgE2E1.png"} description={"Lorem Ipsum Dolor Sit Amet Ipsum Lorem Amet Dolor Sit Dolor Lorem Amet Ipsum Sit."} />
                <CardModel05 title={"Strategy management"} pathImg={"./imgE2E1.png"} description={"Lorem Ipsum Dolor Sit Amet Ipsum Lorem Amet Dolor Sit Dolor Lorem Amet Ipsum Sit."} />
                <CardModel05 title={"Strategy management"} pathImg={"./imgE2E1.png"} description={"Lorem Ipsum Dolor Sit Amet Ipsum Lorem Amet Dolor Sit Dolor Lorem Amet Ipsum Sit."} />
                <CardModel05 title={"Strategy management"} pathImg={"./imgE2E1.png"} description={"Lorem Ipsum Dolor Sit Amet Ipsum Lorem Amet Dolor Sit Dolor Lorem Amet Ipsum Sit."} />
                <CardModel05 title={"Strategy management"} pathImg={"./imgE2E1.png"} description={"Lorem Ipsum Dolor Sit Amet Ipsum Lorem Amet Dolor Sit Dolor Lorem Amet Ipsum Sit."} />
                <CardModel05 title={"Strategy management"} pathImg={"./imgE2E1.png"} description={"Lorem Ipsum Dolor Sit Amet Ipsum Lorem Amet Dolor Sit Dolor Lorem Amet Ipsum Sit."} />
                <CardModel05 title={"Strategy management"} pathImg={"./imgE2E1.png"} description={"Lorem Ipsum Dolor Sit Amet Ipsum Lorem Amet Dolor Sit Dolor Lorem Amet Ipsum Sit."} />
            </div>
        </div>
    )
}