import React from 'react';
import './App.css';
import Form from './components/Form';
import DataPreview from './components/DataPreview';

class App extends React.Component {

  constructor() {
    super ();

    this.handleChange = this.handleChange.bind(this);
    this.handleDataFull = this.handleDataFull.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      typeHome: '',
      dataFull: false,
    }
  }

  handleChange({ target }){
    const { name } = target
    const value = target.type === "checkbox" ? target.checked : target.value

    this.setState({
      [name]: value
  })
  }

  handleDataFull(e) {
    e.preventDefault();
    this.setState({
      dataFull: true,
    })
  }

 

  render(){
    return (
      <div className="App">
        <Form 
          name={this.state.name}
          email={this.state.email}
          cpf={this.state.cpf}
          endereco={this.state.endereco}
          cidade={this.state.cidade}
          estado={this.state.estado}
          typeHome={this.state.typeHome}
          dataFull={this.state.dataFull}
          handleChange={this.handleChange}
          handleDataFull={this.handleDataFull}
        />

        <DataPreview 
          name={this.state.name}
          email={this.state.email}
          cpf={this.state.cpf}
          endereco={this.state.endereco}
          cidade={this.state.cidade}
          estado={this.state.estado}
          typeHome={this.state.typeHome}
          dataFull={this.state.dataFull}
        />
      </div>
    );
  }
  
}

export default App;
