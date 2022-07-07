import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BankIcon from './icons/BankIcon'
import NavBarIcon from './NavBarIcon'
import AuthService from '../services/service/AuthService'

// Verificação vi função que retorna valores booleans
const isUserAuthenticated = () => {
  return AuthService.isUserAuthenticated()
}

const isUserNotAuthenticated = () => {
  if(!AuthService.isUserAuthenticated()){
    return true
  }
}



export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/home'><BankIcon/> Money-React</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                  <NavBarIcon render={isUserAuthenticated()} label='home' link='/home' />
                  <NavBarIcon render={isUserAuthenticated()} label='usuários' link='/registration' />
                  <NavBarIcon render={isUserAuthenticated()} label='lançamentos' link='/launch' />
                  <NavBarIcon render={isUserNotAuthenticated()} label='login' link='/login' />
                  { isUserAuthenticated() ?
                    <li className="nav-item">
                      <Link onClick={() => {AuthService.removeUserAuthenticated(); console.log('logout')}} to='/login' className="nav-link">Sair</Link>
                    </li> :  false
                  }                    
                </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
