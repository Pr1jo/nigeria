import React, {useState} from 'react'
import CoatOfArm from '../image/CoatOfArm.png'
import './Header.css'

const Header = () => {
    return(
        <body>
            <div className='HeaderNav'>
                    <div>
                    <img className='NavImg' src={CoatOfArm} alt='Nigeria Coat of Arm'/>
                    </div>
                    <div className='InputBar'>
                        <input type='text' placeholder='Search' className='SearchBar' />
                        <button type='search'>Search</button>
                    </div>
                </div> 
               
               <div className='NavList'>
                <ul>
                    <li><a>All topics & services</a></li>
                    <li><a>Travel</a></li>
                    <li><a>Taxes</a></li>
                    <li><a>Scams & Fraud</a></li>
                    <li><a>Government Benefits</a></li>
                    <li><a>About</a> </li>
                </ul>
               </div>

               <div id='container'>
                <div className='clearfix'>
                    <img className='imageCoat' src={CoatOfArm} alt='Nigeria Coat of Arm' />
                    <div className='HeaderText'>
                        <h2>Simplifying the discovery of government services.</h2>
                        <p>Our role is to help you discover and comprehend government benefits, programs, and information.</p>
                        <button className='Button'>Read More</button>
                    </div>
                </div>
        
        <div className='faIcons'> 
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-minus"></i>
        <i class="fa-solid fa-minus"></i>
        <i class="fa-solid fa-chevron-right"></i>
        </div>

               </div>
        </body>
                 


    );
}

export default Header