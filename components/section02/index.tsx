import React from 'react';
import style from './style.module.scss';
import { CardModel01 } from '../card/card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Section02() {

    return (
        <div className={style.section} id="parceiros">
            {/* <div className={style.decor}>
                
            </div> */}
            <div className={style.title}>
                <span>NOSSOS PARCEIROS</span>
            </div>
            <div className={style.boxCard}>
                {/* <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} swipeable={true} showIndicators={false} stopOnHover={true} width={350}> */}
                <CardModel01 pathImg={"/OneTrustLogo.png"} />
                <CardModel01 pathImg={"/a10.png"} />
                <CardModel01 pathImg={"/veeam.png"} />
                <CardModel01 pathImg={"/hillstone-networks-logo.svg"} />
                <CardModel01 pathImg={"/huawei-cloud.png"} />
                <CardModel01 pathImg={"/sentinel-one.png"} />
                <CardModel01 pathImg={"/senha-segura.png"} />
                {/* </Carousel> */}
            </div>
        </div>
    )
}