import React, {useState} from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'
import '../components/Header.css'



const Body2 = () => {
    return(
        <>
        <div>
            <div className='Body1Head'>
                    <h2>File a complaint against a financial institution </h2>
            </div>

            <div className='flexbox'>
                    <div className='flexDiv'>
                        <div className='gridiv'> 
                        <h3 className='gridHead'>Bank & Security Compaints </h3>
                        <p className='gridp'>Learn about citizenship requirements and other related info.</p>
                        </div>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                         <div className='gridiv'>
                         <h3 className='gridHead'>Involving Government Agencies</h3>
                         <p>Learn how to file complaints involving government.</p>
                         </div>
                         <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <h3 className='gridHead'>Travel</h3>
                    <p>Complaint about travel and get your problem resolved.</p>
                        </div>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className='flexDiv'>
                        <div className='gridiv'>
                    <h3 className='gridHead'>Product & Services Complaints</h3>
                    <p>How to file complaints about product and services.</p>
                        </div>
                    <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>

        </div>
        </>
    )
}

export default Body2;