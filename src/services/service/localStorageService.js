class LocalStorageService{

    static addItem(key, value){
        localStorage.setItem(key, JSON.stringify(value ))
    }

    static getItem(key){
        const getItem = localStorage.getItem(key)
        return JSON.parse(getItem)
    }

    static deleteItem(key){
        localStorage.removeItem(key)
    }
}

export default LocalStorageService