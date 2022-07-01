import React, { Component } from 'react'
import 'bootswatch/dist/lux/bootstrap.css'
import Navbar from './components/Navbar'
import Login from './views/Login'

export default class App extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Login/>
            </div>
        )
    }
}
