import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Launch from '../views/Launch'
import Login from '../views/Login'
import Registration from '../views/Registration'

export default class Content extends Component {
  render() {
    return (
      <Routes>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/registration'  element={<Registration/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/launch' element={<Launch/>}/>
      </Routes>
    )
  }
}
