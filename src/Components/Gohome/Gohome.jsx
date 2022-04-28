import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import blackHomeIcon from './../../assets/home_black.png'
import WhiteHomeIcon from './../../assets/home_white.png'
import './Gohome.css'
 class Gohome extends Component {
   navigateHome = () =>{
         const {history} =this.props;
         history.push('/')
     }
     render(){
        const {location} = this.props
        
        const whiteBtn =location.pathname==='/'  ;
        return (
            <button onClick={this.navigateHome} className={`go-home-btn ${whiteBtn ? 'white-bg' :'linear-bg'}`}>
                <img src={whiteBtn ? blackHomeIcon :WhiteHomeIcon} alt="home button" className='home-icon'/>
            </button>
            
            )

     }
    
       
   
}
export default withRouter(Gohome);


// import React from 'react'
// import {useHistory} from 'react-router-dom'
// import blackHome from './../../assets/home_black.png'
// const Gohome = () => {
//     const history = useHistory()
//     const navigateHome=()=>{
//        history.push('/')
        

//     }
//     return (
//         <div>
//             <button onClick={navigateHome}>
//                  <img src={blackHome} alt="home button" className='go-home-button'/>
//              </button>
//         </div>
//     )
// }

// export default Gohome
