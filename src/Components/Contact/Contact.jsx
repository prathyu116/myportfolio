import React from 'react'
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import VectorFrame from './../../assets/about_vector.png'
import './Contact.css'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'
import insta from './../../assets/in.png'
import waa from './../../assets/waa.png'
// import github from './../../assets/gh.png'
const Contact = () => {
    return (
      <div className="section-container">
        <Header heading="Contact me" details="Drop me  an email and get in touch with me " />
        {/* Form Section */}
        <div className="contact-form-section">
          <form className="contact-form" action="https://formspree.io/f/mqkwbnjp" method="POST">
            <input type="email" placeholder="enter your email" name="_replyto" className="input-box email-input" />
            <textarea type="text" name="message" placeholder="your message" className="input-box textarea-input"></textarea>
            <button type="submit" className="contact-btn">
              Send Email
            </button>
          </form>
        </div>
        {/* Social Icon Section */}
        <div className="social-icon-container">
          <a href="https://github.com/prathyu116">
            <img src={github} alt="github" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/prathyu-prasad/">
            <img src={linkedin} alt="linkedin" className="icon" />
          </a>
          {/* <a href="">
                   <img src={insta} alt="insta" className='icon' />
               </a> */}
          <a href="https://www.instagram.com/p_r_a_t_h_y_u_o/">
            <img src={insta} alt="insta" className="icon" />
          </a>
          {/* <a href="http://wa.link/vxwudi">
                   <img src={waa} alt="insta" className='icon'/>
               </a> */}
        </div>
        <FooterLink content="Read more " toaddress="/about" link="aboutme" />
        <div className="vector-frame">
          <img src={VectorFrame} className="about-vector" alt="VectorFrame" />
        </div>
      </div>
    );
}

export default Contact
