import React, {useState} from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'
import Angle from '../image/angle-right.png'
import '../components/Header.css'
import Body2 from './2Body'
import Footer from '../components/Footer'

const Home2 = () => {
    return (
        <>

        <body>
            <div className='ComHead'>
            <p><a>Home</a></p>
            <img src={Angle} alt='angle' />
            <p>Complaints</p>
        </div>

        <div>
            <div>
                <h1>Complaints</h1>
                <p>
                Get informed on how to file complaints about banking, retirement plans and the agencies that offer them.
                </p>
            </div>
            
            <div>
            {/* <IoEllipseOutline />
            <LuTriangleRight /> */}
            </div>

        </div>
        </body>
        <Body2 />
        <Footer />
        
        </>
    )
}



export default Home2;