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
                        <button className='BarButton' type='search'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div> {/*HeaderNav*/}
               
               <div className='NavList'>
                <ul className='NavUOList'>
                    <li><a>All topics & services</a></li>
                    <li><a>Travel</a></li>
                    <li><a>Taxes</a></li>
                    <li><a>Scams & Fraud</a></li>
                    <li><a>Government Benefits</a></li>
                    <li><a>About</a> </li>
                </ul>
               </div> {/*NavList */}

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

               </div>{/*Container */}
        </body>
                 


    );
}

export default Header;