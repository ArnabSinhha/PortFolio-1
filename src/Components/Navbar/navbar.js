import React from 'react' ;
import './navbar.css' ;
import logo from '././PngItem_277677.png';
import {Link} from 'react-scroll';





const Navbar = () => {
  return (

  <nav className="navbar">
    <img src={logo} alt="" className='imgNavbar'/>
    <div className="desktopMenu">
      <Link className="desktopMenuListItem">Home</Link>
      <Link className="desktopMenuListItem">About</Link>
      <Link className="desktopMenuListItem">Portfolio</Link>
      <Link className="desktopMenuListItem">Clients</Link>
    </div>
    <button className="desktopMenuBtn"> Contact Me</button>
  </nav>
  )
}

export default Navbar
