import React from 'react'
import { Link } from 'react-router-dom'
import './FooterLink.css'
const FooterLink = ({content,link,toaddress}) => {
    return (
        <div className="footer-container">
            <Link to={toaddress} className='footer-link'>{link}</Link>
            
        </div>
    )
}

export default FooterLink
