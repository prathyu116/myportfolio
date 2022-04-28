import React from 'react'
import './Header.css'

const Header = ({heading,details}) => {
    return (
        <header className="header-container">
            <h1>{heading}</h1>
            <p>{details}</p>

        </header>
    )
}

export default Header
