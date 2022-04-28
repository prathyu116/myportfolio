import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import './App.css'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Gohome from '../Gohome/Gohome'
import Achievement from '../Achievement/Achievement'
const App = () => {

   
    return (
        <div>
            <Router>
                <Navbar />
                <Route exact path='/'>
                    <Home/>
                </Route>

                <Route path='/about'>
                    <About />
                </Route>

                <Route path='/projects'>
                    <Projects />
                </Route>

                <Route path='/skills'>
                    <Skills />
                </Route>

                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/achievement'>
                  <Achievement />
                </Route>
               <Gohome />
            </Router>
      
        </div>
    )
}

export default App
