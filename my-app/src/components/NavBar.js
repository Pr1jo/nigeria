import React, { useState } from 'react'
import CoatOfArm1 from '../image/CoatOfArm1.png'
import './Header.css'
import { useRef } from 'react'
import Home from './Home'
import Body1 from './Body1'
import Body2 from './Body2'
import Footer from './Footer'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink, Link, useLocation } from 'react-router-dom'


const NavBar = () => {
    const navRef = useRef();

    const currentRoute = useLocation()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const [open, setOpen] = useState(false);

    const Menus = [<Link to='/complain'>Complaints</Link>, "Rehabilitation", "Disability services", "Nigeria Health Department", "Disasters & Emergency", "Education", "Government Benefits", "Housing Help", "Law & Legal Issues", "Money & Credit", "Small Business", "Voting & Elections"];

    //Solution

    const menuRef = useRef();
    const subRef = useRef();

    window.addEventListener('click', (e)=>{
        if(e.target !== menuRef.current && e.target !==  subRef.current ){
            setOpen(false);
        }
    });


    return (

        <>

            <header>
                <div className='HeaderNav'>

                    <NavLink to='/'> <img className='NavImg' src={CoatOfArm1} alt='Nigeria Coat of Arm' /> </NavLink>


                    <div className='InputBar'>
                        <input type='text' placeholder='Search' className='SearchBar' />
                        <button className='BarButton' type='search'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                </div>

                <nav ref={navRef}>

                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>


                    <div className={`NavUOList ${currentRoute.pathname === '/' ? '' : 'hideOnDesktop'}`}>      
                        <div className='Nav-Sub'>
                            <p ref={subRef} onClick={()=>setOpen(!open)} className='navr'>All Topics & Services</p>

                            {open && (
                                <div ref={menuRef} className='nav-sub-menu'>
                                <ul>
                                    { Menus.map((menu)=>(
                                            <li key={menu}>{menu}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            )
                            }
                            
                        </div>
                        <p className='navr'><Link to='/Faan'>Travel</Link></p>
                        <p className='navr'>Taxes</p>
                        <p className='navr'>Scams & Fraud</p>
                        <p className='navr'>Government Benefits</p>
                        <p>About</p>
                    </div>

                    {/* <div className='NavList'>

                        <ul className={`NavUOList ${currentRoute.pathname === '/' ? '' : 'hideOnDesktop'}`}>
                            <li><a><NavLink to='/Bank'>All Topics & Services</NavLink></a></li>
                            <li><a href='/#'><Link to='/Faan'>Travel</Link></a></li>
                            <li><a href='/#'>Taxes</a></li>
                            <li><a href='/#'>Scams & Fraud</a></li>
                            <li><a href='/#'>Government Benefits</a></li>
                            <li><a>About</a> </li>
                        </ul>
                    </div>  */}

                </nav>

                <button className='nav-btn ' onClick={showNavbar}>
                    <FaBars />
                </button>


            </header>


        </>



    );
}

export default NavBar;