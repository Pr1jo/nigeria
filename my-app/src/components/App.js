import React from 'react';
import {} from 'react-media';
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import Body1 from './Body1';
import Body2 from './Body2';
import Footer from './Footer';
import Home2 from '../Page_2/Home2';
import Bank from './Bank';
import Faan from './Faan';

function App() {
  // const currentRoute = useLocation()
  // console.log(currentRoute)
  return (
    <>
    <NavBar />
     <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='Home'element={<NavBar/>}></Route>
        <Route path='Complain' element={<Home2/>}></Route>
        <Route path='Bank' element={<Bank/>}></Route>
        <Route path='Faan' element={<Faan/>}></Route>
      </Routes>

    </>


     
  );
}

export default App;
