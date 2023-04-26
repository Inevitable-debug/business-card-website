import React from "react";
import Twitter from "../images/Twitter_Icon.png";
import Facebook from "../images/Facebook_Icon.png";
import Instagram from "../images/Instagram_Icon.png";
import Github from "../images/GitHub_Icon.png";

export default function Footer(): JSX.Element {
    return (
        <footer>
            <img className = 'footer-img' src = {Twitter} alt='Twitter icon'/>
            <img className = 'footer-img' src = {Facebook} alt='Facebook icon'/>
            <img className = 'footer-img' src = {Instagram} alt='Instagram icon'/>
            <img className = 'footer-img' src = {Github} alt='GitHub icon'/>
        </footer>
    )
}
