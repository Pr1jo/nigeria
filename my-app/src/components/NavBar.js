import React, {useState} from 'react'
import CoatOfArm1 from '../image/CoatOfArm1.png'
import './Header.css'
import { useRef } from 'react'
import Home from './Home'
import Body1 from './Body1'
import Body2 from './Body2'
import Footer from './Footer'
import{ FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }



    return(

        <>

        <header>
        <div className='HeaderNav'>
            
            <img className='NavImg' src={CoatOfArm1} alt='Nigeria Coat of Arm'/>
           

            <div className='InputBar'>
            <input type='text' placeholder='Search' className='SearchBar' />
            <button className='BarButton' type='search'><i class="fa-solid fa-magnifying-glass"></i></button>             
            </div>

        </div>

        <nav ref={navRef}>

        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
               <FaTimes />
           </button>

   <div className='NavList'>

           <ul className='NavUOList'>
               <li><a><NavLink to='/'>All Topics & Services</NavLink></a></li>
               {/* <div className='dropdown-content'>
                <li><a href='/#'>Complaints</a></li>
                <li><a href='/#'>Rehabilitation</a></li>
                <li><a href='/#'>Disability Services</a></li>
                <li><a href='/#'>Nigeria Health Department</a></li>
                <li><a href='/#'>Diasters & Emergency</a></li>
                <li><a href='/#'>Education</a></li>
                <li><a href='/#'>Government Benefits</a></li>
                <li><a href='/#'>Housing Help</a></li>
                <li><a href='/#'>Laws & Legal Issues</a></li>
                <li><a href='/#'>Money & Credit</a></li>
                <li><a href='/#'>Small Business</a></li>
                <li><a href='/#'>Voting & Elections</a></li>
               </div> */}
               <li><a href='/#'>Travel</a></li>
                <li><a  href='/#'>Taxes</a></li>
                <li><a  href='/#'>Scams & Fraud</a></li>
                <li><a  href='/#'>Government Benefits</a></li>
                <li><a><NavLink to='/Home'>About</NavLink></a> </li>
            </ul>
           </div> {/*NavList */}
          
   </nav>

   <button className='nav-btn ' onClick={showNavbar}>
       <FaBars />
   </button>


        </header>


        </>



    );
}

export default NavBar;