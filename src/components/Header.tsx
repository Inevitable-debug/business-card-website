import React from "react";
import Image from "../images/Rectangle_90.png";

export default function Header(): JSX.Element {
    return (
        <div>
            <img className='header-img' src={Image} alt='Header image' />
            <h1 className='header-title'>Laura Smith</h1>
            <h3 className='header-job'>Frontend Developer</h3>
            <h6 className='header-website'>laurasmith.website</h6>
        </div>
    );
}
