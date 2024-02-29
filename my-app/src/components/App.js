import React from 'react';
import {} from 'react-media';
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import Body1 from './Body1';
import Body2 from './Body2';
import Footer from './Footer';
import Home2 from '../Page_2/Home2';

function App() {
  return (
    <>
    <NavBar/>
     <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='Home'element={<NavBar/>}></Route>
        <Route path='Complian' element={<Home2/>}></Route>
      </Routes>

    </>


     
  );
}

export default App;
