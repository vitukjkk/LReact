import React from 'react';
import Dados from './Dados';
import Relogio from './Relogio';

export default function Body() {
    const cnl = () => {
        return 'CFB Cursos';
    }

    const yt = () => {
        return 'CFB Cursos no YouTube';
    }

    const crs = () => {
        return 'Curso de React';
    }
    return(
        <main>
            <h2>Body</h2>
            <p>This is the body of the page.</p>
            <Dados 
                canal={cnl} 
                youtube={yt} 
                curso={crs}/>
            <p className='text'>ola mundo!</p>
            <Relogio/>
        </main>
    )
}