import React from "react";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/Mail.png";

export default function Nav(): JSX.Element {
    return (
        <nav>
            <button className='nav-btn' id='nav-btn-1'>
                <img id='nav-icon-1' src={Mail} />Email
            </button>
            <button className='nav-btn' id='nav-btn-2'>
                <img id='nav-icon-2' src={LinkedIn} />LinkedIn
            </button>
        </nav>
    );
}
