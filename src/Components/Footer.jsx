import React from 'react'
import './Footer.css'

// images
import logo from '../Images/website_logo/logo.png'
import app from '../Images/pay/app.jpg'
import play from '../Images/pay/play.jpg';
import pay from '../Images/pay/pay.png';
import  newsImage from '../Images/banner/b14.png'
const Footer = () => {
const newCss={
    "background": `url(${newsImage})`, 
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "20% 30%", 
    "backgroundColor": "#041e42",
    "color": "#fff"

}


    return (
        <>

<section id="newsletter" className="section-p4 section-m1 p-4" style={newCss}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="newstext">
                    <h3>Sign Up For Newsletter</h3>
                    <p>Get Email updates about our latest shop and <span className="text-warning">special offers</span>.</p>
                </div>
            </div>
            <div className="col-md-6">
                <form className="form-inline d-flex">
                    <input type="email" className="form-control border rounded-left" placeholder="Your Email address"/>
                
                    <button  type="submit" className="btn btn-success rounded-right col-md-2">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</section>


            <footer className="section-p1 p-5">
                <div className="row">
                    <div className="col-md-3">
                        <img className="logo" src={logo} alt="" />
                        <h4 className="mt-3">Contact</h4>
                        <p ><strong>Address :</strong> 32 Campion School road, park street, Arera colony, Bhopal</p>
                        <p><strong>Phone :</strong> 0755-255688 / 0755-012012</p>
                        <p><strong>Hours :</strong> 10AM - 5PM, Mon - Fri</p>

                        <div className="follow mt-4">
                            <h4>Follow Us</h4>
                            <div className="icon mt-4 ">

                                <a className='me-2' href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a className="m-1" href="https://twitter.com/?lang=en-in" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a className="m-1" href="https://www.instagram.com/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a className="m-1" href="https://www.pinterest.com/login/" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                <a className="m-1" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>

                            </div>
                        </div>
                    </div>



                    <div className="col-md-3 ">
                        <h4 >About</h4>
                        <div className="UL  text-start">
                            <div ><a href="#">About Us</a></div>
                            <div ><a href="#">Dedivvery Information</a></div>
                            <div ><a href="#">Privacy Podivcy</a></div>
                            <div ><a href="#">Terms & Conditions</a></div>
                            <div ><a href="#">Contact Us</a></div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h4>My Account</h4>
                        <div className="UL">
                            <div><a href="#">Sign In</a></div>
                            <div> <a href="#">View Cart</a></div>
                            <div><a href="#">My Wishdivst</a></div>
                            <div> <a href="#">Track My Order</a></div>
                            <div><a href="#">Help</a></div>
                        </div>
                    </div>
                    <div className="col-md-3 install">
                        <h4>Install App</h4>
                        <p>From App store or Google Play </p>
                    
                            <div  >
                                <img className="border border-dark rounded" src={app} alt="" />
                            </div>
                            <div className='mt-2'> 
                                <img className="border border-dark rounded" src={play} alt="" />
                            </div>
                     
                        <p>Secured Payment Gateways</p>
                        <img  src={pay} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright text-center mt-5">
                            <p>© 2023, Tech2 etc - HTML CSS Ecommerce Template</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
