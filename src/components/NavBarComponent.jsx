import React from 'react'
import "./NavBarComponent.css";
const NavBarComponent = () => {
    return (
        <div>
            <nav>
              <div className="logo">
                <img  src='/images/brand_logo.png' alt='logo'/>
                <ul>
                  <li href="#">Menu</li>
                  <li href="#">LOCATION</li>
                  <li href="#">ABOUT</li>
                  <li href="#">CONTACT</li>
                </ul>
                <button>Login</button>
              </div>
            </nav>
        </div>
    )
}

export default NavBarComponent