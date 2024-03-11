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


const Faan3 = () => {
    return(
        <>
        <div id='Faan3'>
            <h1>More updates</h1>

            <div className='Faan3Con'>
       
              <div className='Cen'>
                   <div className='CenHead'>
                      <h3>
                          Central Bank of Nigeria dissolves the Board and Management of three (3) Banks
                        </h3>
                            <p>
                             Due to non-compliance of the Banks and their Boards.
                            </p>
                     </div>
                           <i class="fa-solid fa-arrow-right"></i>
                </div>


    <div className='IbaHead'>
        <div className='IbaText'>
            <h3>Ibadan Explosion</h3>
        <p>FG awaits forensic investigation of actual cause of tragic incident.</p>
        </div>  
      <i class="fa-solid fa-arrow-right"></i>
    </div>
            </div>
        </div>
        </>
    )
}


export default Faan3;