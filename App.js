import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

const page = (
    <div>
        <Header />
        <Nav />
        <Main />
        <Footer />
    </div>
)

export default function App() {
    return page
}