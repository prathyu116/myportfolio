import React from 'react'
import './Skills.css'
import Tilt from "react-parallax-tilt";

const SkillCard = ({skillName,skillUrl}) => {
    return (
        <Tilt className='skill'>
            <img src={skillUrl} alt="skill images" srcset="" />
            <p>{skillName}</p>
            
        </Tilt>
    )
}

export default SkillCard
