import React from 'react';

export default function Caixa(props) {
    // FAZ COM QUE RETORNE OS ELEMENTOS FILHOS
    return (
        <>
            <p>{props.site}</p>
            <h1>CFB Cursos</h1>
            {props.children}
        </>
    )
}