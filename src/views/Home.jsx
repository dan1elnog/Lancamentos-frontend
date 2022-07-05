import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LayoutIcon from '../components/icons/LayoutIcon'
import MoneyIcon from '../components/icons/MoneyIcon'
import UserIcon from '../components/icons/UserIcon'
import UserService from '../services/service/userService'
import LocalStorageService from '../services/service/localStorageService'
import currencyFormatter from "currency-formatter"

export default class Home extends Component {
    constructor(){
        super()
        this.service = new UserService()
    }

    state = {
        balance:0
    }

    componentDidMount(){
        const user = LocalStorageService.getItem('_user')
        this.service.getBalanceById(user.id)
        .then(res => {
            this.setState({balance: res.data})
        })
    }

    render() {
        return (
        <div className='container mt-5'>
            <div className="card text-white bg-primary mb-3" >
                <div className="card-header"><LayoutIcon/></div>
                <div className="card-body">
                    <h1 className="card-title">Bem Vindo(a)</h1>
                    <p className="card-text">Esse é o seu sistema de finanças</p>
                    <p className="card-text">Seu saldo para o mês atual é de R${currencyFormatter.format(this.state.balance, 'pt-BR')}</p>
                    <hr />
                    <p className="card-text">Essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema:</p>
                    <Link className='btn btn-outline-info mx-1' to='/registration'><UserIcon/> cadastrar um usuário</Link>
                    <Link className='btn btn-outline-danger mx-1' to='/launch'><MoneyIcon/> cadastrar um lançamento</Link>
                </div>
            </div>
        </div>
        )
    }
}
