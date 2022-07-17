import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";
import ReactGA from "react-ga"
// import Particles from "react-tsparticles";
// import ParticleConfigs from "../config/particle.configs";

import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
  ReactGA.initialize("G-4B001WLZE6");
  ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    const homeClass = location.pathname === "/" ? "active-item1" : "";
    const aboutClass = location.pathname === "/about" ? "active-item1" : "";
    const projectClass = location.pathname === "/projects" ? "active-item1" : "";
    const skillClass = location.pathname === "/skills" ? "active-item1" : "";
    const contactClass = location.pathname === "/contact" ? "active-item1" : "";
    // const achievementClass = location.pathname === "/achievement" ? "active-item1"/ : "";
    return (
      <>
        <Menu>
          {/* <Particles params={ParticleConfigs}></Particles> */}
          <Link to="/" className={`menu-item ${homeClass}`}>
            Home
          </Link>
          <Link to="/about" className={`menu-item ${aboutClass}`}>
            About
          </Link>

          <Link to="/skills" className={`menu-item ${skillClass}`}>
            Skills
          </Link>
          <Link to="/projects" className={`menu-item ${projectClass}`}>
            Projcts
          </Link>

          <Link to="/contact" className={`menu-item ${contactClass}`}>
            Contact
          </Link>
          {/* <Link to="/achievement" className={`menu-item ${achievementClass}`}>
                Achievement
              </Link> */}
        </Menu>
      </>
    );
  }
}
export default withRouter(Navbar);
