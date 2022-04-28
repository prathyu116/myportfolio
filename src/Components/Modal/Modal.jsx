import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const Modal = ({ShowingModal}) => {
    return ReactDom.createPortal(
        <div onClick={ShowingModal}  className="modal-overlay">
           <div onClick={(e)=>e.stopPropagation()} className="modal-container">
               <div className="upper-sec">
                   <h1>Huge Announcement</h1>
                   <p onClick={ShowingModal} className="close">&times;</p>
               </div>
               <div className="mid-sec">
                   <h3>Trafdgdfffgdfgdfgfgfdgfdfdgd</h3>

               </div>
               <div className="lower-sec">
                   <a href="" className="btn-red">Close</a>

               </div>
           </div>
        </div>,
        document.getElementById('modal')
    );
}
 
export default Modal ;