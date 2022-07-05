import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarIcon(props) {
  return (
    <li className="nav-item">
        <Link to={props.link} className="nav-link">{props.label}</Link>
    </li>
  )
}
