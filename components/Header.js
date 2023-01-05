import React from "react"
import ReactDOM from "react-dom"

export default function Header() {
    return (
        <div>
            <img className = 'header-img' src = './images/Rectangle_90.png' />
            <h1 className = 'header-title'>Laura Smith</h1>
            <h3 className = 'header-job'>Frontend Developer</h3>
            <h6 className = 'header-website'>laurasmith.website</h6>
        </div>
    )
}