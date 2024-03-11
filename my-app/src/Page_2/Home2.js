import React, {useState} from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Face from '../image/Face.png'
import Angle from '../image/angle-right.png'
import '../components/Header.css'
import Body2 from './2Body'
import Footer from '../components/Footer'

const Home2 = () => {
    return (
        <>

        <body id='Home2'>
            <div className='ComHead'>
            <p><Link to='/'>Home</Link></p>
            <img src={Angle} alt='angle' />
            <p>Complaints</p>
        </div>

        <div className='ComContain'>
            <div className='ComHead2'>
                <h1>Complaints</h1>
                <p>
                Get informed on how to file complaints about banking, retirement plans and the agencies that offer them.
                </p>
            </div>
            
            <div>
                <img className='Emojis' src={Face} alt='Polygon' />
            </div>

        </div>
        </body>
        <Body2 />
        <Footer />
        
        </>
    )
}



export default Home2;