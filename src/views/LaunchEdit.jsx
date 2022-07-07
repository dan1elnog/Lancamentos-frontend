import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as alert from '../components/alerts/Alerts'
import  LaunchService from '../services/service/LaunchService'

const base_url = `http://localhost:8080/api/launch`

export default function LaunchEdit() {
    const service = new LaunchService()
    const {id} = useParams()
    const [description, setDescription] = useState('')
    const [month, setMonth] = useState('')
    const [value, setValue] = useState('')
    const [year, setYear] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
      
    function update(){
        const userJson = localStorage.getItem('_user')
        const userString = JSON.parse(userJson)
        const user = userString.id
        const data = {id , description, month, value, year, type, status, user}
        service.validate(data)
        axios.put(`${base_url}/${id}`, data)
            .then(res => {
                alert.successMessage('Sucesso', 'Lançamento atualizado com sucesso!')
            }).catch(error => {
                alert.errorMessage('Erro ao atualizar o Lançamento')
            })
   }
    
    return (
        <form className='container col-6 mt-5 mb-5 '>
            <legend>Atualizar Lançamento {id}:</legend>
            <div className="form-group">
                <label htmlFor="description" className="forbm-label mt-4">Descrição: *</label>
                <input type="text" className="form-control" id="description" name='description'
                    onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="month" className="form-label mt-4">Mês: *</label>
                <select className="form-select" name='month' id="month" onChange={e => setMonth(e.target.value)}>
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
                <input type="number" className="form-control" id="year" name="year"  onChange={e => setYear(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="value" className="forbm-label mt-4">Valor:</label>
                <input type="number" className="form-control" id="year" name='value'  onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="type" className="form-label mt-4">Tipo de Lançamento: *</label>
                <select className="form-select" id="type" name='type'  onChange={e => setType(e.target.value)}>
                    <option>SELECIONE</option>
                    <option value={'RECEITA'}>RECEITA</option>
                    <option value={'DESPESA'}>DESPESA</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="status" className="forbm-label mt-4">Status:</label>
                <select type="text" className="form-control" id="status" name='status'  onChange={e => setStatus(e.target.value)}>
                    <option value='PENDENTE'>PENDENTE</option>
                    <option value='CANCELADO'>CANCELADO</option>
                    <option value='EFETIVADO'>EFETIVADO</option>
                </select>
            </div>
            <div className='mt-5'>
                <button onClick={update} type='button' className='btn btn-outline-info mx-1'>Atualizar</button>
                <Link to='/launch' className='btn btn-outline-danger mx-1'>cancelar</Link>
            </div>
        </form>
    )
}
