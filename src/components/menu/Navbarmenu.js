import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import "./Navbarmenu.css";


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
    <header className="header__middle">
        <div className="container">
            <div>

                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <h1 className="logo-style">GRAYSON</h1>
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <NavLink onClick={toggleClass} activeClassName='is-active' to={`/about`}> About <FiChevronDown /> </NavLink>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/blog`}> My Blog </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/book`}>  My Book </NavLink> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/contact`}> Contact </NavLink> </li>
                   
                    <li className="menu-item header-socials fb">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <FaFacebookF className="fb"/>
                        </a>
                    </li>

                    <li className="menu-item tw" >
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <FaTwitter className="tw"/>
                        </a>
                    </li>
                    <li className="menu-item linkedin" >
                        <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="linkedin"/>                     
                        </a>
                    </li>
                    <li className="menu-item instagram" >
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare className="instagram"/>
                        </a>
                    </li>
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu
