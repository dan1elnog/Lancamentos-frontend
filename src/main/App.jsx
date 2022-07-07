import React, { Component } from 'react'
import 'bootswatch/dist/lux/bootstrap.css'
import Navbar from '../components/Navbar'
import Content from './Content'
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"     
import "primeicons/primeicons.css";
import AuthProviderClass from './AuthProviderClass'

export default class App extends Component {

    render() {
        return (
            <AuthProviderClass>
                <Navbar/>
                <Content/>
            </AuthProviderClass>
        )
    }
}
