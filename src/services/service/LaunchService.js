import ApiService from "../apiServices"
import { errorMessage } from "../../components/alerts/Alerts"

class LaunchService extends ApiService {

    constructor(){
        super('/api/launch')
    }

    // getLaunchs(launchFilter){
    //     let params = `?year=${launchFilter.year}`
        
    //     if (launchFilter.month) {
    //         params = `${params}&month=${launchFilter.month}`
    //     }

    //     if (launchFilter.type) {
    //         params = `${params}&type=${launchFilter.type}`
    //     }

    //     if (launchFilter.status) {
    //         params = `${params}&status=${launchFilter.status}`
    //     }

    //     if(launchFilter.user) {
    //         params = `${params}&user=${launchFilter.user}`
    //     }
        
    //     return this.get(params)
    // }

    getLaunchs(launchFilter){
        const params = `?month=${launchFilter.month}`
        
        return this.get(params)
    }

    delete(id){
        return this.delete(`/${id}`)
    }

    save(Launch){
        this.post('', Launch)
    }

    getById(id){
        return this.get(`/${id}`)
    }

    validate(launch){
        const erros = [] 
         
        if (!launch.description) {
            erros.push('O campo descrição é obrigatório')
            errorMessage(erros)
            return false
        }
        if (!launch.value) {
            erros.push('O campo valor é obrigatório')
            errorMessage(erros)
            return false
        }
        if (!launch.year) {
            erros.push('O campo ano é obrigatório')
            errorMessage(erros)
            return false
        }
        if (!launch.month) {
            erros.push('O campo mês é obrigatório')
            errorMessage(erros)
            return false
        }
        if (!launch.type) {
            erros.push('O campo Tipo de Lançamento é obrigatório')
            errorMessage(erros)
            return false
        }
        if (!launch.status) {
            erros.push('O campo status é obrigatório')
            errorMessage(erros)
            return false
        }
        
    }

    changeStatus(launch, status){
        return this.put(`/${launch.id}/change-status`, { status })
    }
}

export default LaunchService