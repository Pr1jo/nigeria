import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Airplane from '../image/Airplane.png'
import Message from '../image/Message.png'
import Business from '../image/Business.png'
import GreenArrow from '../image/GreenArrow.png'
import Card from '../image/Card.png'
import Taxes from '../image/Taxes.png'
import Voting from '../image/Voting.png'
import Health from '../image/Health.png'
import Military from '../image/Military.png'
import FCTA from '../image/FCTA.png'



 const Body1 = () =>{
    return(
        <body>
            <div id='Body1'>

                <div className='Body1Head'>
                    <h2>top services & topics</h2>
                </div>

                <div className='flexbox'>
                    <div className='flexDiv'>
                        <div className='gridiv'> 
                        <img className='gridImg' src={Airplane} alt='Airplane'/>
                        <h3 className='gridHead'>Immigration And Citizenship </h3>
                        <p className='gridp'>Learn about citizenship requirements and other related info.</p>

                        </div>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <img className='gridImg' src={Message} alt='Message'/>
                    <h3 className='gridHead'>Complaints</h3>
                    <p>File complains and more.</p>
                        </div>
                    <Link to='/Complain'><i class="fa-solid fa-arrow-right"></i></Link>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                     <img className='gridImg' src={Health} alt='Health'/>
                    <h3 className='gridHead'>Health</h3>
                    <p>Health resources and benefits.</p>
                        </div>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <img className='gridImg' src={Military} alt='Military'/>
                    <h3 className='gridHead'>Military</h3>
                    <p>How to join the military and it's benefits.</p>
                        </div>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <img className='gridImg' src={Card} alt='Money And Credit'/>
                    <h3 className='gridHead'>Money And Credit</h3>
                    <p>Find government loans, grant and other benefits.</p>
                        </div>  
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <img className='gridImg' src={Business} alt='Small Business'/>
                    <h3 className='gridHead'>Small Business</h3>
                    <p>Learn about business and how to run it.</p>
                        </div>                    
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <img className='gridImg' src={Taxes} alt='Taxes'/>
                    <h3 className='gridHead'>Taxes</h3>
                    <p>Find out how to pay, refund.</p>
                        </div>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <img className='gridImg' src={Voting} alt='Voting And Elections'/>
                    <h3 className='gridHead'>Voting And Elections</h3>
                    <p>All you need to know about voting and elections. </p>
                        </div>                    
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>

        </body>
    );
};

export default Body1