import React from 'react';

class DataPreview extends React.Component {
    render() {

        const {name, email, cpf, endereco, cidade, estado, typeHome, dataFull} = this.props;

        return (
            
            <>
            {dataFull ? (
                <div>
                <h1>Dados de cadastro</h1>
                <p>Nome: {name}</p>
                <p>E-mail: {email}</p>
                <p>CPF: {cpf}</p>
                <p>Endereço: {endereco}</p>
                <p>Cidade: {cidade}</p>
                <p>Estado: {estado}</p>
                <p>Tipo de Casa: {typeHome}</p>
                </div>

            ) : ''}
                

            
            </>
        );
    }
}

export default DataPreview;