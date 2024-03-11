import React, {useState} from 'react'
import CoatOfArm1 from '../image/CoatOfArm1.png'
import './Header.css'
import { useRef } from 'react'
import Home from './Home'
import Body1 from './Body1'
import Body2 from './Body2'
import Footer from './Footer'
import Polygon from '../image/Polygon.png'
import Angle from '../image/angle-right.png'
import{ FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FCTA from '../image/FCTA.png'
import capital from '../image/capital.png'
import GreenArrow from '../image/GreenArrow.png'


const Bank2 = () =>{
    return(
        <>
        <div id='Bank2'>

            
            <div className='BankFile'>
                <h1>File A Complaint Against A Financial Institution </h1>
                <p style={{margin: "50px 0px 0px 0px"}}>To report any financial issues with bank or any related organizations. </p>
            </div>

        <div className='Bankbranch'>{/* */}
            <div className='FirstManger'>
                <div>
                    <h4>1. First, contact the branch manager, the customer care service or organizations website. </h4>
                <p style={{margin: "40px 0px 0px 0px"}}>&bull; You can use this <span>sample template</span> as a guide to help you explain the problem you are facing and how it can be resolved.</p>
                <p style={{margin: "20px 0px 0px 0px"}}>&bull; Provide proof of transaction, checks or other related documents. </p>
                </div>
                <div>
                    <h4 style={{margin: "50px 0px 0px 0px"}}>2. If contacting the branch/bank directly does not help, visit the <span><Link>Consumer Financial Bureau (CFPB) complaint page</Link></span> to: </h4>
                    <p style={{margin: "40px 0px 0px 0px"}}>&bull; Find specific banking and credit services and products you can complain about through the CFPB.</p>
                    <p style={{margin: "20px 0px 0px 0px"}}>&bull; Find out what document and information you need to include with your complaint.</p>
                    <p style={{margin: "20px 0px 0px 0px"}}>&bull; Start your complaint filling process.</p>
                </div>
            </div>

            <div className='StateGap'>{/* */}
                <div className='IbaHead BankIbaHead'>
                 <div className='IbaText'>
                    <h3>Ibadan Explosion</h3>
                    <p>FG awaits forensic investigation of actual cause of tragic incident.</p>
                </div>  
                 <i class="fa-solid fa-arrow-right"></i>
            </div>

         <div className='Fcta BankFcta'>
            <img className='FCTAImg' src={FCTA}  alt='Federal Capital Territory Administration'/>
            <img className='capital' src={capital}  alt='Federal Capital Territory Administration' />
           <div className='FctaHead'>
             <div className='NewsG'>
             <h3>Reloction of FAAN Headquarters  from Abuja to Lagos. </h3>
             <p>Office space scarcity in Abuja initially made the move from Lagos appear impractical.</p>
             </div>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
            </div>{/* */}
            
             
         </div>{/* */}
        </div>

        <Footer />
        </>
    )
}

export default Bank2