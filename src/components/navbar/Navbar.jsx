import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo_il.jpg';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>Developer Roadmap</a></p>
    <p><a href='#possibility'>AI</a></p>
    <p><a href='#home'>Cryptocurrency</a></p>
    <p><a href='#features'>Robotics</a></p>
    <p><a href='#home'>Networks & security</a></p>
    <p><a href='#blog'>about us</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
         <div className='gpt3__navbar-links_logo'>
             <img src={logo} alt="logo"/>
         </div>
         <div className='gpt3__navbar-links_container'>
             <Menu/>
         </div>
        </div>
        <div className='gpt3__navbar-sign'>
        <a href="https://docs.google.com/document/d/e/2PACX-1vS57xr6oxYNCWT87arZLGT_mFoWRpCw8P2Q7Vo1ayNgHxRXvIwAuP2kGdAt1bM81MiGjHWSv4oUbF2X/pub?embedded=true"><button type='button'>Handbook</button> </a>
          
        </div>
        <div className='gpt3__navbar-menu'>
            {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
                <div className='gpt3__navbar-menu_container-links'>
                <Menu/>
                </div>
            </div>
        )}
        </div>
    </div>
  )
}

export default Navbar