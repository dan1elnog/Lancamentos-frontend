import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/service/userService'
// import LocalStorageService from '../services/service/localStorageService'
import {errorMessage} from '../components/alerts/Alerts'
import { AuthContext } from '../main/AuthProviderClass'

class Login extends Component {
    
    constructor(){
        super()
        this.service = new UserService()
    }

    state = {
        email:'',
        password:'',
    }

    login = () => {
        this.service.auth({
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            // Método para armazenar um usuário loggado no local storage 
            //LocalStorageService.addItem('_user', res.data)
            this.context.startSession(res.data)
            window.location.href = '/home'
        }).catch(error => {
            errorMessage(error.response.data)
        })
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
                <button type='button' className='btn btn-outline-primary mx-1' onClick={() => this.login()} >Login</button>
                <Link to="/registration" className='btn btn-outline-warning mx-1'>cadastrar</Link>
            </div>
        </form>
    )
  }
}

Login.contextType = AuthContext

export default Login
