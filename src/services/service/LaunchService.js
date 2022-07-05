import ApiService from "../apiServices"

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

}

export default LaunchService