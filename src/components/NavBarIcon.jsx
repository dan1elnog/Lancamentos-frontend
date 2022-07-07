import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarIcon( {render, ...props}) {
  
  if (render) {
    return (
      <li className="nav-item">
          <Link to={props.link} className="nav-link">{props.label}</Link>
      </li>
    )
  }else{
    return false
  }
}
