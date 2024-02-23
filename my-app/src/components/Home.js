import React, {useState} from 'react'
import CoatOfArm from '../image/CoatOfArm.png'
import './Header.css'
import { useRef } from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'


const Home = () =>{
    return(
        <>
         <div id='container'>
                <div className='clearfix'>
                 <img className='imageCoat' src={CoatOfArm} alt='Coat of Arm'/>
                 <div className='clearfixHug'>
                     <div className='clear'>
                     <h1>Simplifying the discovery of government services.</h1>
                     <p>Our role is to help you discover and comprehend government benefits, programs, and information.</p>
                     </div>   
                     <div>
                         <button className='Button'>Read more</button>
                     </div>
                 </div>
                </div>
         <div id='faIcons'> 
         <i class="fa-solid fa-chevron-left fa-2xl"></i>
         <i class="fa-solid fa-minus min fa-2xl"></i>
         <i class="fa-solid fa-minus us fa-2xl"></i>
         <i class="fa-solid fa-chevron-right fa-2xl"></i>
         </div>

                </div>
        </>
    )
}

export default Home