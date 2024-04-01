import React from 'react'
import heroImage from '../Images/herosection/hero4.png'
import './hero.css'
import button from '../Images/button/button.png'
const HeroSection = () => {
    const heroStyle={
        "background-image": `url(${heroImage})`,
         "background-position": "top 25% right 0",
          "background-size": "cover",
     
    }
    const aStyle={
        "background-image": `url(${button})`,
        "background-color": "transparent",
        "border": "0",
        "padding": "14px 80px 14px 65px",
        "background-repeat": "no-repeat",
        "cursor": "pointer",
        "font-weight": "700",
        "font-size": "15px",
        "color":"#198d86" 
    }
  return (
    <>
   <section id="hero"  style={heroStyle}>
    <div class="container heroBody">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1 >On all products</h1>
                <p>Save more with coupons & up to 70% off</p>
                <a style={aStyle} >Shop Now</a>
        </div>

</section>

    </>
  )
}

export default HeroSection
