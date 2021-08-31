import style from './style.module.scss';

export function CardModel01({ pathImg }) {
    return (
        <div className={style.cardModel01}>
            <img src={pathImg} />
        </div>
    )
}

export function CardModel02({ pathImg }) {
    return (
        <div className={style.cardModel02}>
            <div className={style.iconImage}>
                <img src={pathImg} />
            </div>
            <div className={style.description}>
                <p>Lorem Ipsum Dolor Sit Amet</p>
            </div>
        </div>
    )
}