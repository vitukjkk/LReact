import React from 'react';

export default function Relogio() {
    return(
        <p id='clock'>{new Date().toLocaleTimeString()}</p>
    )
}