import React, { Component } from 'react'
import "./Forgot.css"
import { Link } from "react-router-dom";
// import axios from 'axios';

export class Forgot extends Component {
    state = {
        email: "",
        password: "",
        isPasswordShown: false,
        isError: "false",
        errorMessage: ""
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
  render() {
    return (
        <div class="forgot-container col-s-12 col-m-12 col-l-12 col-xl-12">
        <div class="forgot-aside-content col-s-none col-l-6 col-xl-6">
            <img src={require("../../assets/Background/forgot-background-2.png")} alt="background" class="forgot-aside-image col-s-none col-m-12 col-l-12 col-xl-12"/>
        </div>
        <div class="forgot-main-content col-s-12 col-m-12 col-l-6 col-xl-6">
            <Link to="/" class ="forgot-flex-container col-s-12 col-m-12 col-l-12 col-xl-12">
                <div class="forgot-title"><img src={require("../../assets/stock1.png")} alt="logo" class="forgot-image-1"/>CoffeShop</div>
            </Link>
            <div class="forgot-flex-container-2">
                <div class="forgot-sub-title">Forgot your password?</div>
                <div class="forgot-sub-desc">Don’t worry, we got your back!</div>
            </div>
            <form class="forgot-form forgot-margin col-s-12 col-m-8 col-l-10 col-xl-10">
                <input class="forgot-form-input col-s-11 col-m-11 col-l-12 forgot-s-height forgot-margin" type="tel" name="phone" placeholder="Enter your email adress to get link"/>
                <div class="forgot-button col-s-11 col-m-11 col-l-12 forgot-margin forgot-s-height" id="button-1" href="">Send</div>
                <div>
                    <p class="forgot-link-message">Click here if you didn’t receive any link in 2 minutes</p>
                    <p class="forgot-link-timer">01:52</p>
                </div>
                <div class="forgot-button col-s-11 col-m-11 col-l-12 forgot-s-height forgot-margin" id="button-2">Resend Link</div>
            </form>
            <section class="forgot-footer col-s-12 col-m-12 col-l-12 col-xl-12">
                <div class="forgot-footer-content-1">
                    <div>
                        <img src={require("../../assets/stock1.png")} class="forgot-image-3" alt="logo"/>
                        <div class="forgot-title-2 col-s-11">Coffee Shop</div>    
                    </div>
                    <div class="forgot-desc col-s-12 col-m-12 col-m-12 col-l-12 col-xl-12">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
                    <div class="forgot-logo">
                        <img class="forgot-logo-socmed" src={require("../../assets/Facebook.png")} alt="facebook-logo"/>
                        <img class="forgot-logo-socmed" src={require("../../assets/Twitter.png")} alt="twitter-logo"/>
                        <img class="forgot-logo-socmed" src={require("../../assets/Instagram.png")} alt="instagram-logo"/>
                    </div>
                    <div class="forgot-copy-right">©2020CoffeeStore</div>
                </div>
                <div class=" forgot-footer-content-2">
                    <div class="forgot-list-title">Product</div>
                    <div class="forgot-category product">
                        <div class="forgot-list">Download</div>
                        <div class="forgot-list">Pricing</div>
                        <div class="forgot-list">Locations</div>
                        <div class="forgot-list">Countries</div>
                        <div class="forgot-list">Blog</div>
                    </div>
                    <div class="forgot-list-title">Engage</div>
                    <div class="forgot-category forgot-engage" >
                        <div class="forgot-list">Coffe Shop ?</div>
                        <div class="forgot-list">FAQ</div>
                        <div class="forgot-list">About Us</div>
                        <div class="forgot-list">Privacy Policy</div>
                        <div class="forgot-list">Terms of Service</div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
  }
}

export default Forgot