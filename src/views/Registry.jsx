import React, { Component } from 'react'

export default class Registry extends Component {
  render() {
    return (
      <div>
        <form className='container col-6 mt-5 mb-5 '>
            <legend>Formulário de Cadastro:</legend>
              <div className="form-group">
                <label htmlFor="email" className="form-label mt-4">E-mail:</label>
                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite o seu melhor e-mail"/>
                <small id="emailHelp" className="form-text text-muted">Nós nunca iremos compartilhar o seu e-mail</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="forbm-label mt-4">Senha:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite uma senha"/>
              </div>
              <div className="form-group">
                <label htmlFor="password2" className="forbm-label mt-4">Confirmar Senha:</label>
                <input type="password" className="form-control" id="password2" placeholder="Senha"/>
              </div>  
              <div className='mt-5'>
                <button className='btn btn-outline-success'>cadastrar</button>
              </div>
          </form>
      </div>
    )
  }
}
