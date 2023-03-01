import React from 'react';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {
  const navbarMenuList = ['Home', 'About', 'My work', 'Contact'];

  return (
    <div>
      <nav id="navbar">
        <div className="navbar__logo">
          <a href="#">C:HAEVIVI</a>

          {/* Toggle button */}
          <button className="navbar__toggle-btn">
            {/* <i className="fas fa-bars"></i> */}
          </button>
        </div>

        <ul className="navbar__menu">
          {navbarMenuList.map((item) => (
            <NavbarMenu 
              item={item} 
              key={item}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

