import React, { useContext, useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaBell, FaSearch} from 'react-icons/fa'
import { AppProvider } from '../App'
import { Modal } from './Modal/Modal'



export const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [show, setShow] = useState(false)
  const {myList} = useContext(AppProvider)
  const [modal, setModal] = useState(false)

  const handleHide = () => {
    setShow(!show)
  }

  const showModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setScrolled(true)
      } else{
        setScrolled(false)
      }
    })
  }, [])

  return (
    <>
    <div className='relative'>
    <div className={scrolled && 'blur-xl drop-shadow-2xl bg-black/90 fixed top-0 h-20 z-[1000]  transition-all duration-400 delay-300  ease-linear w-full'}></div>
      <div className='fixed top-0 left-0 z-[1000] flex text-4xl justify-between items-center w-full h-10 pt-10 px-8'>
        <a href='/' className='text-yellow-300 tracking-widest font-bold'>MDBFlIX</a>
        <div className='hidden text-xl lg:flex space-x-6'>
        <ul className='flex items-center space-x-6 text-gray-400'>
          <li className='text-white'><a href='/'>Home</a></li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Popular</li>
          <li>Trending</li>
        </ul>
        </div>
        <div className={show ? 'lg:hidden text-xl space-x-6' : 'hidden'}>
        <ul className='p-6 w-full h-screen leading-10 text-2xl bg-black/90 absolute top-16 right-0 flex-col items-center  text-gray-400'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Popular</li>
          <li>Trending</li>
        </ul>
        </div>
        <div className='text-gray-200 flex items-center space-x-6 text-xl'>
          <FaSearch/>
          <FaBell/>
          <div onClick={showModal} className='relative cursor-pointer'>
            <img alt='' className='rounded-full w-10 h-10 object-cover object-center' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800'/>
            <div className='flex drop-shadow-2xl items-center justify-center absolute w-5 h-5 p-2 rounded-lg -top-1 -right-2 bg-yellow-500 text-white'>{myList.length}</div>
          </div>
        </div>
        <div className='flex space-x-4 items-center lg:hidden'>
        <GiHamburgerMenu onClick={handleHide} className='text-white'/>
        </div>
      </div>
    </div>
    {modal && <div className='fixed top-0 z-[80] w-full h-screen overflow-scroll'><Modal/></div>
}

    </>
  )
}
