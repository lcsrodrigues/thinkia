import React from 'react';
import { CardModel02 } from '../card/card';
import style from './style.module.scss';

export default function Section04() {
    return (
        <div id="contato" className={style.section}>
            <div className={style.title}>
                <span><strong>Lorem Ipsum Dolor Sit Amet</strong></span>
            </div>
            <div className={style.resume}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nulla. Cras massa urna, luctus consectetur sem a, tincidunt venenatis elit. Suspendisse potenti. Nunc laoreet in justo et porttitor. Quisque ac rutrum sapien, sit amet mattis diam. Integer id felis iaculis, vulputate est ut, egestas mi. Sed in accumsan nulla, eu sagittis felis.</p>
            </div>
            <div className={style.boxCard}>
                <CardModel02 pathImg={"/checkbox.png"} />
                <CardModel02 pathImg={"/email.png"} />
                <CardModel02 pathImg={"/phone-call.png"} />
                <CardModel02 pathImg={"/tool.png"} />
            </div>
        </div>
    )
}