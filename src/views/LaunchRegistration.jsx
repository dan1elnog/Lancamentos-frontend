import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LaunchService from '../services/service/LaunchService'
import * as alert from "../components/alerts/Alerts" 
import LocalStorageService from '../services/service/localStorageService'

const base_url = 'http://localhost:8080/api/launch'

export default class LaunchRegistration extends Component {
    constructor(){
        super()

        this.service = new LaunchService()
    }    

    state = {
        id: null,
        description: '', 
        month: '',
        year: '',
        value: '',
        user: '',
        type: '',
        status: ''
    }

    submit = () => {
        // Recuperação dos estados a partir do operador destructuring
        const userLog = LocalStorageService.getItem('_user')
        const {description, month, year, value, type} = this.state
        const data = {description, month, year, value, type, user: userLog.id}

        axios.post(base_url, data)
            .then(res => {
                alert.successMessage('Sucesso', 'Lançamento cadastrado!')
            }).catch(error => {
                alert.errorMessage(error.message)
                console.log(error.message)
            })
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name]: value})
    } 
    
    render() {
        return (
            <div>
                <div>
                    <form className='container col-6 mt-5 mb-5 '>
                        <legend>Cadastro de Lançamentos:</legend>
                        <div className="form-group">
                            <label htmlFor="description" className="forbm-label mt-4">Descrição: *</label>
                            <input type="text" className="form-control" id="description" name='description'
                             onChange={this.handleChange}
                             placeholder="Digite a descrição do lançamento" value={this.state.description}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="month" className="form-label mt-4">Mês: *</label>
                            <select className="form-select" name='month' id="month" 
                            onChange={this.handleChange} value={this.state.month}>
                                <option>SELECIONE</option>
                                <option value={1}>JANEIRO</option>
                                <option value={2}>FEVEREIRO</option>
                                <option value={3}>MARÇO</option>
                                <option value={4}>ABRIL</option>
                                <option value={5}>MAIO</option>
                                <option value={6}>JUNHO</option>
                                <option value={7}>JULHO</option>
                                <option value={8}>AGOSTO</option>
                                <option value={9}>SETEMBRO</option>
                                <option value={10}>OUTUBRO</option>
                                <option value={11}>NOVEMBRO</option>
                                <option value={12}>DEZEMBRO</option>
                            </select>
                        </div>  
                        <div className="form-group">
                            <label htmlFor="year" className="forbm-label mt-4 mb-1">Ano: *</label>
                            <input type="number" className="form-control" id="year"
                            placeholder="Digite o Ano" onChange={this.handleChange} value={this.state.year} name="year"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="value" className="forbm-label mt-4">Valor:</label>
                            <input type="number" className="form-control" id="year" 
                            onChange={this.handleChange} name='value' 
                            placeholder="Digite o valor do lançamento"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type" className="form-label mt-4">Tipo de Lançamento: *</label>
                            <select className="form-select" id="type" onChange={this.handleChange} name='type'>
                                <option>SELECIONE</option>
                                <option value={'RECEITA'}>RECEITA</option>
                                <option value={'DESPESA'}>DESPESA</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status" className="forbm-label mt-4">Status:</label>
                            <input type="text" className="form-control" id="status" 
                            onChange={this.handleChange} name='status' placeholder='PENDENTE'
                            value={this.state.status} disabled/>
                        </div>
                        <div className='mt-5'>
                            <button type='button' onClick={this.submit} className='btn btn-outline-success mx-1'>cadastrar</button>
                            <Link to='/launch' className='btn btn-outline-danger mx-1'>cancelar</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
