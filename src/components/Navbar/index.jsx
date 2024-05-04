import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button';
import Leftbar from '../Leftbar';
import './style.scss';
import { ImSun } from "react-icons/im";
import { BiSolidMoon } from "react-icons/bi";
import { AnimatePresence, motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ThemeContext } from '../../App';
import { CgMenuRight } from "react-icons/cg";
import { showSideMenu } from '../../motions/animation';
import { motion as m } from 'framer-motion'
import { Helmet } from 'react-helmet';

const menu = {
  open: {
    width: "480px",
    height: "100vh",
    top: "-25px",
    right: "-25px",
    borderRadius: '15px',
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "60px",
    height: "60px",
    top: "0px",
    right: "0px",
    borderRadius: '60px',
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
}

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);


  useEffect(() => {
    // Vérifie si le token existe dans localStorage au chargement initial du composant
    const tokenFromLocalStorage = localStorage.getItem('token');
    const userDataString = localStorage.getItem('user');
    const userData = JSON.parse(userDataString);

    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
      setUsername(userData.firstName)
    }
  }, []);

  const toggleSideMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      gsap.to(".sidemenu", {
        duration: .5,
        y: '0%',
        x: '0%',
        clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
        ease: "power1.inOut"
      });
    } else {
      gsap.to(".sidemenu", {
        duration: .5,
        y: '-1%',
        x: '7%',
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "power1.inOut"
      });
    }
  };


  const toggleIcon = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme(); // Appelle la fonction toggleTheme pour changer le thème

  };

  const toggleLangue = () => {
    // setIsDarkMode(!isDarkMode);
    // toggleTheme(); // Appelle la fonction toggleTheme pour changer le thème

  };



  useGSAP(() => {
  })
  return (
    <m.div className='nav'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}>
      <div className="part">
        <Link to='/'>
          <div className="logo">
            Zombix
          </div>
        </Link>
      </div>

      <div className="part">
        <div className="nav-items">
          <Link className='nav-link hoverable' to='/home'>home</Link>
          <Link className='nav-link hoverable' to='/about'>about us</Link>
          <Link className='nav-link hoverable' to='/forum'>Forum</Link>




        </div>
      </div>

      <div className="part">

        <Helmet>
          <script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer />
        </Helmet>
        <div id="ecoindex-badge" data-theme="dark"></div>

        {/* <div className="langue" onClick={toggleLangue}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg" alt="" />
        </div> */}
        <div className="icon" onClick={toggleIcon}>
          {isDarkMode ? <ImSun size={20} color='black' /> : <BiSolidMoon size={20} color='white' />}
        </div>

        <div className="sidemenu_elements">

          {token ? (
            <div>{username}</div>
          ) : (

            <Link className='nav-link hoverable' to='/auth'>
              Sign in
            </Link>
          )}

          <button onClick={toggleSideMenu} className='sidemenu_button'>
            <CgMenuRight size={27} />
          </button>

          <div className="sidemenu">

          </div>

        </div>
      </div>

    </m.div>
  )
}

export default Navbar