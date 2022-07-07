import axios from 'axios'
import React, { Component } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from  'primereact/button'
import SearchIcon from '../components/icons/SearchIcon'
import LaunchService from '../services/service/LaunchService' 
import currencyFormatter from "currency-formatter"
import * as alert from '../components/alerts/Alerts'
import TrashIcon from '../components/icons/TrashIcon'
import { Link } from 'react-router-dom'
import EditIcon from '../components/icons/EditIcon'
import CancelIcon from '../components/icons/CancelIcon'
import CheckIcon from '../components/icons/CheckIcon'

const base_url = 'http://localhost:8080/api/launch'

export default class Launch extends Component {
    constructor(props){
        super(props)

        this.service = new LaunchService()
    }

    state = {
        month: '',
        launchs: [],
        visibleDialog: false,
        deleteLaunch: {}
    }

    openConfirm = (launch) => {
        this.setState({visibleDialog: true, deleteLaunch: launch})
    }

    closeConfirm= () => {
        this.setState({visibleDialog: false, deleteLaunch: {}})
    }

    delete(){
        axios.delete(`${base_url}/${this.state.deleteLaunch.id}`)
        .then( res => {
            // Modo para deletar um registro e atuaizar a tabela ao mesmo tempo
                const launchs = this.state.launchs
                const index = launchs.indexOf(this.state.deleteLaunch)
                launchs.splice(index, 1)
                this.setState({launchs: launchs, visibleDialog: false})
                alert.successMessage('Sucesso', 'Lançamento exluído com sucessso!')
            }).catch(error => {
                alert.errorMessage('Erro', 'Erro ao apagar o lançamento!')
            })
    }

    search(){
        const month = this.state.month
        axios.get(`${base_url}/filter?month=${month}`)
        .then(res => {
            if (res.data == 0) {
                alert.warningMessage('Atenção', 'Não há registros para o mês selecionado!')
            }
            this.setState({launchs: res.data})
        })

        // const usuarioLogadoJSON = localStorage.getItem("_user");
        // const usuarioLogado = JSON.parse(usuarioLogadoJSON)

        // this.service.getLaunchs(month)
        //     .then(res => {
        //         this.setState({launchs: res.data})
        //     }).catch(err => {
        //         console.log(err);
        //     })
    }

    changeStatus(launch, status){
        this.service.changeStatus(launch, status)
            .then(res => {
                const launchs = this.state.launchs
                const index = launchs.indexOf(launch)
                if (index !== -1) {
                    launch['status'] = status
                    launchs[index] = launch
                    this.setState(launchs)
                }
                alert.successMessage('Sucesso', `Status do lançamento ${res.data.id} atualizado`)
            })
    }

    render() {
        const footerDialog = (
            <div>
                <Button label="Excluir" icon="pi pi-check" className="p-button-danger" onClick={() => this.delete()} />
                <Button label="Cancelar" icon="pi pi-times" className="p-button-secondary" onClick={this.closeConfirm} />
            </div>
        );
        return (
            <div>
                <div className="card bg-primary text-white mb-3 container mt-4">
                    <div className="card-header"><SearchIcon w={30} h={30}/></div>
                        <div className="card-body">
                        <h4 className="card-title">Buscar Lançamentos:</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="month" className="form-label mt-4">Mês: *</label>
                                <select className="form-select" id="month" value={this.state.month}
                                 onChange={e => this.setState({month: e.target.value})}>
                                    <option>TODOS</option>
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
                            <div className='mt-3'>
                                <button onClick={() => this.search()} type='button' className='btn btn-outline-info me-1' >
                                    <SearchIcon w={15} h={15}/> buscar
                                </button>
                                <Link to={'/launch-registration'} className='btn btn-outline-success ms-1'>+ cadastrar</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='container bg-primary'>
                    <table className="table table-hover text-white ">
                        <thead>
                            <tr>
                                <th scope="col">Descrição:</th>
                                <th scope="col">Valor:</th>
                                <th scope="col">Tipo:</th>
                                <th scope="col">Mês:</th>
                                <th scope="col">Situação:</th>
                                <th scope="col">Ações:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.launchs.map((launch) => 
                                <tr key={launch.id}>
                                    <td>{launch.description}</td>
                                    <td>R${currencyFormatter.format(launch.value, 'pt-BR')}</td>
                                    <td>{launch.type}</td>
                                    <td>{launch.month}</td>
                                    <td>{launch.status}</td>
                                    <td>
                                        <button className='btn btn-success p-3'  
                                            onClick={() => this.changeStatus(launch, 'EFETIVADO')}><CheckIcon/></button>
                                        <button className='btn btn-warning p-3' 
                                            onClick={() => this.changeStatus(launch, 'CANCELADO')}><CancelIcon/></button>
                                        <Link className='btn btn-info p-3' to={`/launch-registration/${launch.id}`}><EditIcon/></Link>
                                        <button type='button' className='btn btn-danger p-3' 
                                            onClick={e => {this.openConfirm(launch)}}>
                                            <TrashIcon w={20} h={20} />
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Dialog header={<TrashIcon w={30} h={30}/>} visible={this.state.visibleDialog}
                    onHide={() => {this.setState({visibleDialog: false})}}
                    footer={footerDialog}>
                    <p>Deseja realmete excluir esse lançamento?</p>
                </Dialog>
            </div>
        )
    }
}