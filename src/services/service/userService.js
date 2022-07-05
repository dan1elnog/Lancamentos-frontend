import ApiService from "../apiServices";
  
class UserService extends ApiService {

    constructor(){
        super('/api/user')
    }

    auth(credentials){
        return this.post('/auth', credentials)
    }

    getBalanceById(id){
        return this.get(`/${id}/balance`)
    }

    postUser(user){
        return this.post('', user)
    }

}

export default UserService