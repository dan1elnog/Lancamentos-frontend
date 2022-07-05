import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/service/userService'
import {errorMessage, successMessage} from '../components/alerts/Alerts'

export default class Registration extends Component {
  constructor(){
    super()
    this.service = new UserService()
  }
  
  state = {
    name:'',
    email:'',
    password:'',
    passwordRepeat:''
  }

  // Método para realizar a verificação dos campos preenchidos
  verify(){
    const messages = []

    if (!this.state.name) {
      messages.push('O campo "Nome" é obrigatório')
    }

    if (!this.state.email) {
      messages.push('O campo "Email" é obrigatório')
    }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
      messages.push('Informe um email válido')
    }

    if (!this.state.password || !this.state.passwordRepeat) {
      messages.push('O campo "Senha" e "Confirmar Senha" são obrigatórios')
    }else if(this.state.password !== this.state.passwordRepeat){
      messages.push("Os valores das senhas não são iguais")
    }

    return messages
  }

  addUser = () =>{
    const msg = this.verify()
    // o If retorna false para o o método não dê prosseguimento ao salvamento
    if (msg && msg.length > 0) {
      msg.forEach((msg, i) => {
        errorMessage(msg)
      })
      return false
    }
    
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.service.postUser(data)
      .then(() =>{
        successMessage('Novo Usuário', 'Usuário cadastrado com sucesso, faça login para acessar o sistema')
      }).catch(error => {
        errorMessage('Não foi possível efetuar o cadastro', error.response.data)
      })
  }

  render() {
    return (
      <div>
        <form className='container col-6 mt-5 mb-5 '>
            <legend>Formulário de Cadastro:</legend>
              <div className="form-group">
                <label htmlFor="name" className="forbm-label mt-4">Nome: *</label>
                <input type="text" className="form-control" id="name" name='name' placeholder="Digite seu nome"
                  onChange={e => this.setState({name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label mt-4">E-mail: *</label>
                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite o seu melhor e-mail"
                  onChange={e => this.setState({email: e.target.value})}
                />
                <small id="emailHelp" className="form-text text-muted">Não divulgamos o seu email</small>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="forbm-label mt-4 mb-1">Senha: *</label>
                <input type="password" className="form-control" id="password" placeholder="Digite uma senha"
                  onChange={e => this.setState({password: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2" className="forbm-label mt-4">Confirmar Senha:</label>
                <input type="password" className="form-control" id="password2" placeholder="Senha"
                  onChange={e => this.setState({passwordRepeat: e.target.value})}
                />
              </div>  
              <div className='mt-5'>
                <button type='button' className='btn btn-outline-success mx-1' onClick={this.addUser}>cadastrar</button>
                <Link to='/login' className='btn btn-outline-danger  mx-1'>cancelar</Link>
              </div>
          </form>
      </div>
    )
  }
}
