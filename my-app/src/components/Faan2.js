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

const Faan2 = () =>{
    return(
        <>
        <div id='Faan2'>
            <div className='Faan2Container'>
                <div className='Faan2Body'>{/* */}
                 <div className='Faan2p'>
                    <p>1. Why is the Relocation back to Lagos necessary?</p>
                    <p>
                       Lack of Office Space in Abuja: The initial move from Lagos 
                       to Abuja was initially deemed ill-advised due to the absence of 
                       sufficient FAAN facilities in the capital.
                    </p>

                        <p style={{margin: "20px 0px 50px 0px"}}>Huge Financial Implications of remaining in Abuja: Remaining
                          in Abuja necessitated paying Duty Tour Allowance (DTA) to staff, as they were technically working out of their official station. This was seen as a waste of public funds and put pressure on limited resources.
                           Utilization of Existing Lagos Facilities: Relocating back to Lagos utilizes existing FAAN buildings, and saves costs on renting new office space in Abuja.</p>
                </div>


                <div className='Faan2p'>
                    <p>2. Any Future Plans for FAAN HQ?:</p>
                    <p>
                       New Offices: Plans are underway to have concessionaires 
                       build suitable offices for FAAN in both Lagos and Abuja.</p>
                </div>


                <div className='Faan2p'>
                    <p>3. Is this move Temporary?:</p>
                    <p>
                       Until new offices are built in Abuja, FAAN will use continue to its
                       old building in Lagos.
</p>
                </div>


                <div className='Faan2p'>
                    <p>4. What about FAAN Operations in Abuja?</p>
                    <p>
                       Despite the shift in headquarters back to Lagos, FAAN will maintain its 
                       full operational offices in Abuja without scaling down its activities.</p>
                </div>


                <div className='Faan2p'>
                    <p>5. When will a Permanent Headquarters Decision be made?:</p>
                    <p> 
                       A final decision on the permanent location of the headquarters 
                       will be made in the future, based on the needs of the time. 
                       In line with President Bola Tinubu's avowed commitment to public interest,
                       FAAN is assuring the public of its continued dedication to acting in the country's
                       best interest, particularly regarding the judicious use of public funds. 
                       The Honourable <span>Minister of Aviation, Mr. Festus Keyamo,</span> has also
                       said he is committed to making decisions that favor national interests and efficient 
                       use of public resources, without succumbing to ethnic IC or sectional biases.</p>
                </div>
                
            </div>{/* */}
            <div>
            <div className='IbaHead FaanIbaHead'>
                 <div className='IbaText'>
                    <h3>Ibadan Explosion</h3>
                    <p>FG awaits forensic investigation of actual cause of tragic incident.</p>
                </div>  
                 <i class="fa-solid fa-arrow-right"></i>
            </div>
            </div>
            </div>
           
        </div>
        </>
    )
}


export default Faan2;