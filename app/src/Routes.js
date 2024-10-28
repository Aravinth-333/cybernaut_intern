import React from 'react'
import image from './assests/logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './App'; // Make sure these components exist
import About from './About';
import Contact from './Contact';
function Routes1() {
  return (
    <>
    <BrowserRouter>
    <div className='flex flex-row items-center p-5'>
                    <img className='w-26 h-16' src={image} alt='logo' />
                    <nav className='flex flex-row p-5 justify-end items-end space-x-3 ml-auto'>
                    <Link to='/'>Home</Link>
                   <Link to='/about'>About us</Link>
                  <Link to='/contact'>Contact us</Link>
                </nav>
                
      </div>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routes1