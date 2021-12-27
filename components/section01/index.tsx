import React from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';

export default function Section01() {
    return (
        <div className={style.section}>
            <div className={style.title}>
                <span>Lorem Ipsum Dolor</span>
            </div>
            <div className={style.text}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, urna volutpat consectetur varius, sapien lorem mollis massa, et pellentesque ante justo eget eros. Sed blandit porttitor tempus. Sed quis gravida libero, at sagittis felis. Nam vel accumsan ex. Quisque libero urna, consectetur a varius in, imperdiet id nunc.</span>
            </div>
{/*             <div className={style.actions}>
                <Button text={"Submit"}/>
            </div> */}
        </div>
    )
}