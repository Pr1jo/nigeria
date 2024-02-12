import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
// import coatofarm from '../images/coatofarm';

const Header = ()=> {
    return (
        
            <nav>
                <div className='navTop'>
                    <div><image /></div>
                    <div><input type='Search' placeholder='Search' /></div>
                </div>

                <div className='navList'>
                 <ul>
                    <li><a>All topics & services</a></li>
                    <li><a>Travel</a></li>
                    <li><a>Taxes</a></li>
                    <li><a>Scams & Fraud</a></li>
                    <li><a>Government Benefits</a></li>
                    <li><a>About </a></li>
                 </ul>
                </div>
            </nav>

            
    )
}

export default Header