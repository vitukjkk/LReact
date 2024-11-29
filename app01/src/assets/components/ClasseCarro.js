import React from 'react';

export default class Carro extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Carro foi montado');
    }

    componentDidUpdate() {
        console.log('Carro foi atualizado');
    }

    compoenentWillUnmount() {
        console.log('Carro foi desmontado');
    }

    render() {
        return (
            <>
                <h1>Meu Carro</h1>
                <p>Canal: {this.props.canal}</p>
            </>
        );
    }
}