import React, { useState } from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion';
import Logo from '../../assets/logo.png'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    const NavItems=['home','about','work','skills','testimonial','contact']
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={Logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
            {NavItems.map((item,index)=>(<li className='app__flex p-text' key={index}>
            <div/>
                <a href={`#${item}`}>{item}</a>
            </li>))}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            {toggle && (<motion.div
             whileInView={{ x: [300, 0] }}
             transition={{ duration: 0.85, ease: 'easeOut' }}>
                <HiX onClick={()=>setToggle(false)} />
                <ul>
            {NavItems.map((item,index)=>(<li key={index}>
            <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
            </li>))}
            </ul>
            </motion.div>)}

        </div>
    </nav>
  )
}

export default Navbar
