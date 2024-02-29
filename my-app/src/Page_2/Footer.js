import React, {useState} from 'react'
import './Header.css'
import CoatOfArm from '../image/CoatOfArm.png'
import Facebook from  '../image/Facebook.jpg'
import Twitter from '../image/Twitter.jpg'
import Instagram from '../image/Instagram.jpg'
import COA from '../image/COA.jpg'



const Footer = () => {
    return(
        <body>
            <div id='Footer'>

                 <div className='FootContainer'>

                        <div className='FootLeft'>
                           <div className='FootleftImg'>
                            <img className='FootImg' src={COA} alt='Coat of Arm' />
                          </div>

                          <div className='FootText'>
                             <div>
                       <div><h3>Quick Links</h3></div>
                 <div className='FootLinks'>
                    <ul className='QuickLinks'>
                        <li><a>About Us</a></li>
                        <li><a>Top Servics & Topics</a></li>
                        <li><a>Privacy Policy</a></li>
                    </ul>
                 </div>
                 </div>

                 <div className='Socials'>
                 <div><h3>Socials</h3></div>
                 <div className='socialsimg'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img className='SocialsImg' src={Facebook} alt='Facebook' />
                    </a>

                    <a href="https://twitter.com/?logout=1708336803357" target="_blank" rel="noreferrer">
                        <img className='SocialsImg'  src={Twitter} alt='Twitter'/>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <img  className='SocialsImg'  src={Instagram} alt='Instagram'/>
                    </a>

                   </div>
                  </div>
                          </div>

                

                </div> {/* FootLeft */}

            

            <div className='FootRight'>

                <div className='FootSub'>
                    <h2>Subscribe To Receive Our Newsletter</h2>
                    <p>Stay Informed About Our Most Recent News and Publications.</p>
                </div>
                <div className='FootIn'>
                <input className='Input' type='Email' placeholder='Enter Email' />
                </div>
                <button className='Button' type='search'>Subscribe</button>

            </div>

            </div> {/*FootContainer */}

            <div className='CopyRight'>
                <p>Copyright © 2024 Government of Nigeria  | All rights reserved</p>
            </div>


        </div> {/*Footer */}

        </body>
        
        
    );
};



export default Footer;