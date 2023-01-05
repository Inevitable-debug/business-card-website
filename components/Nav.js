import React from "react"
import ReactDOM from "react-dom"

export default function Nav() {
    return (
        <nav>
            <button className = 'nav-btn' id = 'nav-btn-1'>
            <img id = 'nav-icon-1' src='../images/Mail.png'/>Email</button>
            <button className = 'nav-btn' id = 'nav-btn-2'>
            <img id = 'nav-icon-2' src='../images/linkedin.png'/>LinkedIn</button>
        </nav>
    )
}