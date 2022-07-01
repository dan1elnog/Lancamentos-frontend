import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props)

    }
    state = {
        email:'',
        password:''
    }

    handleLogin(){
        console.log(this.state.email)
        console.log(this.state.password)
    }

  render() {
    return (
        <form className='container col-6 mt-5 mb-5 '>
            <h2>Login:</h2>
            <div className="form-group">
                <label htmlFor="email" className="form-label mt-4">E-mail:</label>
                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu e-mail"
                    value={this.state.email}
                    onChange={ e => this.setState({email: e.target.value})}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="forbm-label mt-4">Senha:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua senha"
                    value={this.state.password}
                    onChange={ e => this.setState({password: e.target.value})}
                />
            </div>
            <div className='mt-5'>
                <button className='btn btn-outline-primary mx-1' onClick={() => this.handleLogin()} >Login</button>
                <button className='btn btn-outline-warning mx-1'>cadastrar</button>
            </div>
        </form>
    )
  }
}
