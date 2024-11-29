import React from 'react';

export default class Classe extends React.Component {
    constructor(props) {
        super(props);
        this.modelo = 'HB20s'
        this.state = {
            ligado: false,
            vel: 0
        }
    }

    ligarDesligar() {
        this.setState(
            (state) => { // AS VEZES DA PROBLEMA DE RENDERIZAÇÃO E POR ISSO É MELHOR USAR A NOTAÇÃO DE FUNÇÃO
                {ligado: !state.ligado}
            }
        );
    }

    acelerar() {
        this.setState(
            (state) => {
                {vel: state.vel + this.props.fator}
            }
        );
    }

    render() {
        return (
            <>
                <h1>Componente Classe</h1>
                <p>Carro {this.props.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade: {this.state.vel}</p>
                <button onClick={() => this.ligarDesligar()}>
                    Partida: {this.state.ligado ? 'Desligar' : 'Ligar'}
                </button>
            </>
        );
    }
}