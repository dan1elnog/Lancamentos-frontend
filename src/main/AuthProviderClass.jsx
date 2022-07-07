import React, { Component } from 'react'
import { createContext } from 'react'
import AuthService from '../services/service/AuthService'

// Maneira de se utilizar a context API para exportar dados(Provider) que irão ser consumidos por 
// outros componenetes do sistema(Consumers)

export const AuthContext = createContext()
export const AuthCocumer = AuthContext.Consumer
const AuthProvider = AuthContext.Provider

export default class AuthProviderClass extends Component {

    state = {
        userAuthenticated: null,
        isAuthenticated: false
    }

    startSession = (user) => {
        AuthService.login(user)
        this.setState({isAuthenticated: true, userAuthenticated: user})
    }

    endSession = (user) => {
        AuthService.removeUserAuthenticated()
        this.setState({isAuthenticated: false, userAuthenticated: null})
    }
    
    render() {
        const context = {
            userAuthenticated: this.state.userAuthenticated,
            isAuthenticated: this.state.isAuthenticated,
            startSession: this.startSession,
            endSession: this.endSession,
        } 
        
        return (            
            <AuthProvider value = {context} >
                {this.props.children}
            </AuthProvider>
        )
    }
}
