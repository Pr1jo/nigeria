import React, {useState} from 'react';
import './Header.css'
import Airplane from '../image/Airplane.jpg'
import Message from '../image/Message.jpg'
import Business from '../image/Business.jpg'
import GreenArrow from '../image/GreenArrow.jpg'
import Card from '../image/Card.jpg'
import Taxes from '../image/Taxes.jpg'
import Voting from '../image/Voting.jpg'
import Health from '../image/Health.jpg'
import Military from '../image/Military.jpg'



 const Body1 = () =>{
    return(
        <body>
            <div id='Body1'>

                <div>
                    <h2>top services & topics</h2>
                </div>

                <div className='Body1Grid'>

                    <div className='GridDiv'>
                     <div>
                     <img className='gridImg' src={Airplane} alt='Airplane'/>   
                    <h3 className='gridHead'>Immigration And Citizenship </h3>
                     <p>Learn about citizenship requirements and other related info.</p>
                    </div>
                    <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>
                    
                    <div className='GridDiv'>
                        <div>
                        <img className='gridImg' src={Message} alt='Message'/>
                        <h3 className='gridHead'>Complaints</h3>
                       <p>File complains and more.</p>
                    </div>
                    <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>
                    
                    
                    <div className='GridDiv'>
                        <img className='gridImg' src={Health} alt='Health'/>
                        <h3 className='gridHead'>Health</h3>
                       <p>Health resources and benefits.</p>
                       <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>

                     <div className='GridDiv'>
                        <img className='gridImg' src={Military} alt='Military'/>
                        <h3 className='gridHead'>Military</h3>
                       <p>How to join the military and it's benefits.</p>
                       <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>    

                    <div className='GridDiv'>
                        <img className='gridImg' src={Card} alt='Money And Credit'/>
                        <h3 className='gridHead'>Money And Credit</h3>
                       <p>Find government loans, grant and other benefits.</p>
                       <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>    

                    <div className='GridDiv'>
                        <img className='gridImg' src={Business} alt='Small Business'/>
                        <h3 className='gridHead'>Small Business</h3>
                       <p>Learn about business and how to run it.</p>
                       <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>   

                     <div className='GridDiv'>
                        <img className='gridImg' src={Taxes} alt='Taxes'/>
                        <h3 className='gridHead'>Taxes</h3>
                       <p>Find out how to pay, refund.</p>
                       <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>     

                    <div className='GridDiv'>
                        <img className='gridImg' src={Voting} alt='Voting And Elections'/>
                        <h3 className='gridHead'>Voting And Elections</h3>
                       <p>All you need to know about voting and elections. </p>
                       <img className='gridImg' src={GreenArrow} alt='GreenArrow'/>
                    </div>    

                </div>
            </div>
        </body>
    );
};

export default Body1