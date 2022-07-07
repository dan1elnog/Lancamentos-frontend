import LocalStorageService from "./localStorageService";

export default class AuthService {
  
    static isUserAuthenticated(){
        const userLog = localStorage.getItem('_user')
        if(userLog){
            return true
        }
    }

    static removeUserAuthenticated(){
        LocalStorageService.deleteItem('_user')
    } 

    static login(user){
        LocalStorageService.addItem('_user', user)
    }

    static getUserAuthenticated(){
        return LocalStorageService.getItem('_user')
    }
}

