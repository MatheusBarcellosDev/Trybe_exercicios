import React from "react";

class Form extends React.Component {
    render() {

        const {name, email, cpf, endereco, cidade, estado, typeHome, handleChange, handleDataFull} = this.props;

        return (
            <>
            <form>
            <fieldset>
                <legend>Dados</legend>
                <label for="name">
                    <input type="text" id="name" placeholder="Nome" maxlength="40" name="name" required value={name} onChange={handleChange}/>
                </label>
                <label for="email">
                    <input type="email" id="email" placeholder="E-mail" maxlength="50" name="email" required value={email} onChange={handleChange}/>
                </label>
                <label for="cpf">
                    <input type="text" id="cpf" placeholder="CPF" maxlength="11" required value={cpf} name="cpf" onChange={handleChange}/>
                </label>
                <label for="endereco">
                    <input type="text" id="endereco" placeholder="Endereço" maxlength="200" name="endereco" required value={endereco} onChange={handleChange}/>
                </label>
                <label for="cidade">
                    <input type="text" id="cidade" placeholder="Cidade" maxlength="28" name="cidade" required value={cidade} onChange={handleChange}/>
                </label>
                <label for="estado">
                    <select id="estado" value={estado} onChange={handleChange} name="estado">
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </label>
                <label>
                    <input type="radio"  name="typeHome" value="Casa" /* checked={typeHome} */ onChange={handleChange}/>Casa
                    <input type="radio" name="typeHome" value="Apartamento" /* checked={typeHome} */ onChange={handleChange}/>Apartamento
                </label>
            </fieldset>

            <button type="submit" className="btn" onClick={handleDataFull}>Enviar</button>
            </form>
            </>

        )
    }
}

export default Form;