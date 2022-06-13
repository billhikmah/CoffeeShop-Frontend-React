import React from 'react'
import './Footer.css';
// import Link from 'react-router-dom';

function Footer() {
  
  return (
    <section className="component-footer">
        <div className="component-footer-space-1"></div>
        <div className="component-footer-content">
            <div className="component-footer-content-1">
                <div>
                    <img src={require("../../assets/stock1.png")} className="component-footer-image-3" alt="Logo"/>
                    <div className="component-footer-title-2">Coffee Shop</div>    
                </div>
                <div className="component-footer-desc">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
                <div className="component-footer-logo">
                    <img src={require("../../assets/Facebook.png")} alt="facebook-logo"/>
                    <img src={require("../../assets/Twitter.png")} alt="twitter-logo"/>
                    <img src={require("../../assets/Instagram.png")} alt="instagram-logo"/>
                </div>
                <div className="component-footer-copy-right">©2020CoffeeStore</div>
            </div>
            <div className="component-footer-content-2">
                <div className="component-footer-list-title">Product</div>
                <div className="component-footer-list">Download</div>
                <div className="component-footer-list">Pricing</div>
                <div className="component-footer-list">Locations</div>
                <div className="component-footer-list">Countries</div>
                <div className="component-footer-list">Blog</div>
            </div>
            <div className="component-footer-content-3" >
                <div className="component-footer-list-title">Engage</div>
                <div className="component-footer-list">Coffe Shop ?</div>
                <div className="component-footer-list">FAQ</div>
                <div className="component-footer-list">About Us</div>
                <div className="component-footer-list">Privacy Policy</div>
                <div className="component-footer-list">Terms of Service</div>
            </div>
        </div>
        <div className="component-footer-space-2"></div>
    </section>
  )
}

export default Footer