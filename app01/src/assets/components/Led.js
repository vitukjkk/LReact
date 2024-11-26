import React, { useState } from 'react';

import GitHub from '../imgs/github pequeno.png';
import LinkedIn from '../imgs/linkedin pequeno.png';

export default function Led(props) {
    const cancelar = (e) => {
        return e.preventDefault();
    }
    return (
        <>
            <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado ? 'Ligado' : 'Desligado'}</button>
            <img src={props.ligado ? GitHub : LinkedIn}/>
            <a href='https://google.com/' target='_blank' onClick={(e) => cancelar(e)}>
                Ola Mundo!
            </a>
        </>
    )
}