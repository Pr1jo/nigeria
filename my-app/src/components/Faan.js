import React, {useState} from 'react'
import CoatOfArm1 from '../image/CoatOfArm1.png'
import './Header.css'
import { useRef } from 'react'
import Footer from './Footer'
import Angle from '../image/angle-right.png'
import{ FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FCTA from '../image/FCTA.png'
import capital from '../image/capital.png'
import GreenArrow from '../image/GreenArrow.png'
import Faan2 from './Faan2'
import Faan3 from './Fann3'


const Faan = () => {
    return(
        <>
        <div id='Faan'>
            <div className='ComHead'>
                <p><Link to='/'>Home</Link></p>
                <img src={Angle} alt='angle' />
                <p>Blog</p>
            </div>

            <div className='Relocate'>
                <div className=''>
                     <h1>Reloction Of FAAN Headquarters  From Abuja To Lagos. </h1>
                </div>

                <div className='line'></div>

                <div className=''>
                    <p style={{margin: "20px 0px 0px 0px"}}>PUBLISHED 01/02/2024</p>
                    <p style={{margin: "20px 0px 20px 0px", width :"500px"}}>Office space scarcity in Abuja initially made the move from Lagos appear impractical.</p>
                    <div>
                        <img className='' src={capital} alt='FCT' />
                    </div>
                </div>
               
            </div>

        </div>
        <Faan2 />
        <Faan3 />
        <Footer />
        </>
    )
}


export default Faan;