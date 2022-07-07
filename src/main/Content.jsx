import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../views/Home'
import Launch from '../views/Launch'
import LaunchEdit from '../views/LaunchEdit'
import LaunchRegistration from '../views/LaunchRegistration'
import Login from '../views/Login'
import Registration from '../views/Registration'
import AuthService from '../services/service/AuthService'


// Função para a criação de Rotas react router v6
const PrivateRoute = ({children, redirectTo}) => {
  const userLog = AuthService.isUserAuthenticated()
  console.log('user = ', userLog);
  return userLog ? children : <Navigate to={redirectTo}/>
}

export default class Content extends Component {
  render() {
    return (
      <Routes>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/home' element={<PrivateRoute redirectTo='/login'>
          <Home/>
        </PrivateRoute>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/launch' element={<PrivateRoute redirectTo='/login'>
          <Launch/>
        </PrivateRoute>}/>
        <Route path='/launch-registration' element={<PrivateRoute redirectTo='/login'>
          <LaunchRegistration/>
        </PrivateRoute>}/>
        <Route path='/launch-registration/:id' element={<PrivateRoute redirectTo='/login'>
          <LaunchEdit/>
        </PrivateRoute>}/>
      </Routes>
    )
  }
}
