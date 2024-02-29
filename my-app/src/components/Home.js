import React, {useState} from 'react'
import CoatOfArm from '../image/CoatOfArm.png'
import './Header.css'
import { useRef } from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'
import NavBar from './NavBar'
import arrow from '../image/arrow.png'
import Body1 from './Body1'
import Body2 from './Body2'
import Footer from './Footer'


const Home = () =>{
    return(

        <div>
            
         <body>
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
         <img className='arrow' src={arrow} alt='Coat of Arm'/>
         </div>

                </div>
         </body>
         <Body1/>
         <Body2 />
         <Footer />

        </div>
    
        
         
    )
}

export default Home