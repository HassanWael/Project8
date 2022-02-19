import React, { useState } from 'react';

let Navbar = () => {

  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(true);
    if (menu === true) {
      document.querySelector('.navbar-collapse').classList.toggle('show');
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2><a href="" className="logo-link">Logo</a></h2>
        </div>
        <div className="navbar-toggler" onClick={menuHandler}>
          <i className="bi bi-list toggler-icon"></i>
        </div>
        <div className="navbar-collapse">
          <ul className="navbar-nav list-unstyled">
          <li className="nav-item">
              <a href="" className="nav-link">
                <span className="nav-number">01.</span> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <span className="nav-number">02.</span> About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <span className="nav-number">03.</span> Work
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <span className="nav-number">04.</span> Experince
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <span className="nav-number">05.</span> Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <button className='primary-btn'>Hire Me</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
