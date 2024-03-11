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
import Bank2 from './Bank2'

const Bank = () =>{
    return(
        <>
        <body id='Home2'>
        <div className='ComHead'>
            <p><Link to='/'>Home</Link></p>
            <img src={Angle} alt='angle' />
            <p><Link to='/Complain'>Complaints</Link></p>
            <img src={Angle} alt='angle' />
            <p>Banking</p>
        </div>

        <div className='ComContain'>
            <div className='ComHead2'>
                <h1>Banking and Security Complaints</h1>
                <p>
                File complaints involving banking, government agencies, produces and services, etc.
                </p>
            </div>
            
            {/* <div>
                <img className='PolyImg' src={Polygon} alt='Polygon' />
            </div> */}

        </div>
        </body>
         <Bank2 />
        </>
        
        
    )
}

export default Bank;