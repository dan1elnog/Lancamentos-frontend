import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BankIcon from './icons/BankIcon'
import NavBarIcon from './NavBarIcon'

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
                  <NavBarIcon label='home' link='/home' />
                  <NavBarIcon label='usuários' link='/registration' />
                  <NavBarIcon label='lançamentos' link='/launch' />
                  <NavBarIcon label='login' link='/login' />
                </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
