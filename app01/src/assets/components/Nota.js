import React from 'react'

export default function Nota(props) {
    return (
        <div>
            <legend>Informe a nota:</legend>
            <input type="text" value="" onchange="" />
        </div>
    )
}
const [nota1, setNota1] = useState(0);
const [nota2, setNota2] = useState(0);
const [nota3, setNota3] = useState(0);
const [nota4, setNota4] = useState(0);