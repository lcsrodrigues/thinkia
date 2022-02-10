import React, { useState } from 'react';
import { Button } from '../buttons';
import style from './style.module.scss';

export default function Section03() {

    const [clientNome, setClientNome] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [btnText, setBtnText] = useState("Enviar");
    const [btnColor, setBtnColor] = useState("");

    function saveInformation(clientNome, clientEmail) {
        if (clientNome !== "" && clientEmail !== "") {
            // console.log(clientEmail);
            // console.log(clientNome);
            setClientEmail("");
            setClientNome("");
            setBtnText("SUCESSO");
            setTimeout(function () {
                setBtnText("ENVIAR");
            }, 2000)
        } else {
            setBtnText("FALHA");
            setBtnColor("red");
            setTimeout(function () {
                setBtnText("ENVIAR");
                setBtnColor("");
            }, 2000)
        }
    }

    return (
        <div className={style.section} id="contato">
            <div className={style.divOpacity}></div>
            <div className={style.container}>
                <div className={style.title}>
                    <span>FIQUE POR DENTRO</span>
                </div>
                <div className={style.text}>
                    <span>Quer saber um pouco mais sobre nossas soluções, ofertas e ficar por dentro de tudo que acontece de novidade no mundo da tecnologia?</span>
                </div>
                <div className={style.actions}>
                    <input id={"iptNome"} placeholder={"Seu nome aqui"} type={"text"} onChange={(e) => { setClientNome(e.target.value) }} value={clientNome} />
                    <input id={"iptEmail"} placeholder={"Seu e-mail aqui"} type={"email"} onChange={(e) => { setClientEmail(e.target.value) }} value={clientEmail} />
                    <Button _color={btnColor} _text={btnText} _name={clientNome} _email={clientEmail} saveInformation={saveInformation} />
                </div>
            </div>
        </div>
    )
}