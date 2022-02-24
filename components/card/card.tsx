import style from './style.module.scss';

export function CardModel01({ pathImg }) {
    return (
        <div className={style.cardModel01}>
            <img src={pathImg} />
        </div>
    )
}

export function CardModel02({ pathImg, description, title }) {
    return (
        <div className={style.cardModel02}>
            <div className={style.iconImage}>
                <img src={pathImg} />
                <label>{title}</label>
            </div>
            <div className={style.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function CardModel03({ pathImg, title, description }) {
    return (
        <div className={style.cardModel03}>
            <div className={style.iconImage}>
                <img src={pathImg} />
            </div>
            <div className={style.title}>
                <p>{title}</p>
            </div>
            <div className={style.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function CardModel04({ pathImg, title, description, signature, office }) {
    return (
        <div className={style.cardModel04}>
            <div className={style.perfil}>
                <img src={pathImg} />
            </div>
            <div className={style.title}>
                <p>{title}</p>
            </div>
            <div className={style.description}>
                <p>{description}</p>
            </div>
            <div className={style.signature}>
                <p>{signature}</p>
            </div>
            <div className={style.signature}>
                <p>{office}</p>
            </div>
        </div>
    )
}

export function CardModel05({ pathImg, title, description }) {
    return (
        <div className={style.cardModel05}>
            <div className={style.head}>
                <img src={pathImg} alt={"icone"} />
            </div>
            <div className={style.title}>
                <p>{title}</p>
            </div>
            <div className={style.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}