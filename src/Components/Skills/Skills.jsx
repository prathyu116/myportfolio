import React from 'react'
import Header from '../Header/Header'
import { skillList,Proficiencies } from '../../assets/skillsData'
import FooterLink from '../FooterLink/FooterLink'
import SkillCard from './SkillCard'
import skillVector from '../../assets/skills_vector.png'
import './Skills.css'

const Skills = () => {
    return (
      <div className="section-container">
        <Header heading="My Skill" details="" />
        <div className="skill-card-container">
          {skillList.map((skills) => {
            return (
              <div>
                <SkillCard skillName={skills.skillName} skillUrl={skills.skillUrl} />
              </div>
            );
          })}
        </div>
        <Header heading="PROFICIENCIES" details="" />
        <div className="skill-card-container">
          {Proficiencies.map((skills) => {
            return (
              <div>
                <SkillCard skillName={skills.skillName} skillUrl={skills.skillUrl} />
              </div>
            );
          })}
        </div>
        <FooterLink content="get in " link="My Works" toaddress="/projects" />
        <div className="skill-vector-frame">
          <img src={skillVector} alt="skillVector" className="skillVector" />
        </div>
      </div>
    );
}

export default Skills
