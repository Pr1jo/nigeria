import React, {useState} from 'react'
import './Header.css'
import FCTA from '../image/FCTA.jpg'
import GreenArrow from '../image/GreenArrow.jpg'


const Body2 = () => {
    return(

        <div id='Body2'>

<div className='Body2Head'>
    <h3>News & updates</h3>
</div>

<div className='NewsFcta'>
    <div className='Fcta'>
            <img className='FCTAImg' src={FCTA}  alt='Federal Capital Territory Administration'/>

        <div className='FctaHead'>
        <div className='NewsG'>
        <h3>Reloction of FAAN Headquarters  from Abuja to Lagos. </h3>
        <p>Office space scarcity in Abuja initially made the move from Lagos appear impractical.</p>
        </div>
         <i class="fa-solid fa-arrow-right"></i>
        </div>
      
    </div>

    <div className='IbaHead'>
        <div className='IbaText'>
            <h3>Ibadan Explosion</h3>
        <p>FG awaits forensic investigation of actual cause of tragic incident.</p>
        </div>  
      <i class="fa-solid fa-arrow-right"></i>
    </div>

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

    
    
    {/* <div className='Center'></div> */}
</div>

</div>
    )
}


export default Body2;