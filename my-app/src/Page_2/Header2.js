import React, {useState} from 'react'
import{ FaBars, FaTimes } from 'react-icons/fa'
import '../components/Header.css'


const Header2 = () => {
    return(
        <>
        <header>
        <div className='HeaderNav'>
            <div>
            <img className='NavImg' src={CoatOfArm} alt='Nigeria Coat of Arm'/>
            </div>

            <div className='InputBar'>
            <input type='text' placeholder='Search' className='SearchBar' />
            <button className='BarButton' type='search'><i class="fa-solid fa-magnifying-glass"></i></button>             
            </div>

        </div>
        </header>
        </>
    )
}