import React from 'react'
import './Achievement.css'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import mern from "./../../assets/mern.pdf"
import node from "./../../assets/node.pdf"
import letter from "./../../assets/letter.pdf"

const Achievement = () => {
    return (
        <div className='section-container'>
          <Header heading='My Achievement'
          details='Check Out My Achievements'
           />
           <div className="achivements">
           <div className='achivement-card'>
            <p>Succusfully completed Full stack (MERN) web development traing and internship with <a href="https://www.shapeai.tech/" style={{color:"blue"}}>shapeai</a> </p>
                <a href={mern} style={{color:"blue"}}>view the certificate</a>
            </div>
           <div className='achivement-card'>
            <p>Completed 7day javascript and backend with nodejs bootcamp with <a href="https://www.shapeai.tech/" style={{color:"blue"}}>shapeai</a> </p>
                <a href={node} style={{color:"blue"}}>view the certificate</a>
            </div>
           <div className='achivement-card'>
            <p>Recommendation letter after completing of internship program by <a href="https://www.shapeai.tech/" style={{color:"blue"}}>shapeai</a> </p>
                <a href={letter} style={{color:"blue"}}>view the certificate</a>
            </div>
           </div>
         
          
           
           
        </div>
    )
}

export default Achievement
