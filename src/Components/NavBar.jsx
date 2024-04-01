import React from 'react'
import logo from '../Images/website_logo/logo.png'
import './NavBarCss.css'
const NavBar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid d-flex justify-content-between"> {/* Use flexbox classes */}
    <div>
      <a href="index.html" className="navbar-brand logo-div"><img src={logo} className="logo" alt="" /></a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"> {/* Use justify-content-end to push items to the right */}
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="shop.html">Shop</a></li>
        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
        <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
        <li className="nav-item"><a className="nav-link" href="cart.html"><i className="fa-solid fa-bag-shopping"></i></a></li>
        <li className="nav-item"><a className="nav-link" href="login.html">Login<i className="fa-solid fa-arrow-right-to-bracket"></i></a></li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar
