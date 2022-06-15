import React, { Component } from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import withNavigate from "../../helpers/withNavigate";
import accountLogin from '../../components/Services/login';

export class Login extends Component {
    constructor (){
        super()
        this.state = {
            email: "",
            password: "",
            isPasswordShown: false,
            error: false,
            errorMessage: ""
        }
    }
    login = (body) => {
        accountLogin(body)
        .then((res) => {
            this.setState({
                error: false,
                errorMessage: ""
            })
            localStorage.setItem("token", res.data.data.token);
            this.props.navigate("/");
        })
        .catch((error) => {
            this.setState({
                error: true,
                errorMessage: error.response.data.err.msg
            })
        })
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    componentDidUpdate(){}
  render() {
    return (
        <div className="col-s-12 col-m-12 col-l-12 col-xl-12">
            <section className="login-container cols-s-12 col-m-12 col-l-12 col-xl-12">
                <div className="login-aside-content col-s-none col-m-4 col-l-6 col-xl-6">
                    <img src={require("../../assets/side-pict.jpeg")} alt="side-pict" className="aside-image col-s-none col-m-12 col-l-12 col-xl-12"/>
                </div>
                <div className="main-content col-s-12 col-m-8 col-l-6 col-xl-6">
                    <div className ="flex-container col-s-12 col-m-12 col-l-12 col-xl-12">
                        <Link to="/" className="login-title"><img src={require("../../assets/stock1.png")} className="login-image-1" alt='logo'/>CoffeShop</Link>
                        <Link to="/auth" className="login">Sign up</Link>
                    </div>
                    <div className="flex-container-2">
                        <div className="subtitle">Login</div>
                    </div>

                    <form className="form margin col-s-12 col-m-8 col-l-8 col-xl-8">
                        <label htmlFor="email" className="form-label col-s-11 col-m-11 col-l-12 margin">Email Address:</label>
                        <input className="form-input col-s-11 col-m-11 col-l-12 s-height margin" type="email" name="email" placeholder="Enter your email adress"
                        onChange={(e) => {
                            this.setState ({
                                email: e.target.value
                            })
                        }}/>
                        
                        <label htmlFor="password" className="form-label col-s-11 col-m-11 col-l-12 margin">
                                Password:
                        </label>
                        <div className='margin col-s-11 col-m-11 col-l-12 password-input-container s-height'>
                            <input
                            className="password-input col-s-12 col-m-12 col-l-12 col-xl-12"
                            type={`${this.state.isPasswordShown ? "text" : "password"}`}
                            name="password"
                            placeholder="Enter your password"
                            onChange={(e) => {
                                this.setState ({
                                    password: e.target.value
                                })
                            }}>
                            </input>
                            
                            <i
                            id="visibility-button"
                            value={this.state.isPasswordShown} 
                            onClick={() => {
                                this.setState({
                                    isPasswordShown: !this.state.isPasswordShown
                                })
                            }}>
                                {this.state.isPasswordShown === true ? 
                                    <span className="material-symbols-outlined">
                                        visibility
                                    </span>:
                                    <span className="material-symbols-outlined">
                                    visibility_off
                                    </span>
                                }
                                
                            </i>
                        </div>
                        <Link to="/forgot" className='forgot-label col-s-11 col-m-11 col-l-12 margin'>Forgot Password?</Link>


                        {this.state.error ? <p className="errorMessage">{this.state.errorMessage}</p> : <p className="errorMessage">{this.state.errorMessage}</p>}

                        < div className="button col-s-11 col-m-11 col-l-12 margin s-height" id="button-1" onClick={async (e) => {
                            e.preventDefault();
                            const {email, password} = this.state
                            const body = {
                                email: email,
                                password: password,
                            }
                            this.login(body);
                        }}>
                            <div>Login</div>
                        </div>
                        <div className="button button-2 col-s-11 col-m-11 col-l-12 s-height margin" id="button-2">
                            <img className="login-image-2 " src={require("../../assets/stock2.png")} alt='google-logo'/>
                            <div className="sub-buton-2">Login with Google</div>
                        </div>
                    </form>
                </div>
            </section>
            <div className="su-box col-s-12 margin">
                <div className="box-1-left col-s-11 margin">
                    <div className="col-s-11 box-1-left-1">Get your member card now!</div>
                    <div className="box-1-left-2">Let's join with our member and enjoy the deals.</div>
                </div>
                <div className="box-1-right col-s-11 s-height margin">Create Now</div>
            </div>
            <section className="footer col-s-12">
                <div className="space-1"></div>
                <div className="footer-content">
                    <div className="footer-content-1">
                        <div>
                            <img src={require("../../assets/stock1.png")} className="image-3" alt='logo'/>
                            <div className="title-2 col-s-11">Coffee Shop</div>    
                        </div>
                        <div className="desc col-s-12 ">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
                        <div className="logo">
                            <img className="logo-socmed" src={require("../../assets/Facebook.png")} alt="facebook-logo"/>
                            <img className="logo-socmed" src={require("../../assets/Twitter.png")} alt="twitter-logo"/>
                            <img className="logo-socmed" src={require("../../assets/Instagram.png")} alt="instagram-logo"/>
                        </div>
                        <div className="copy-right">©2020CoffeeStore</div>
                    </div>
                    <div className=" footer-content-2">
                        <div className="product">
                            <div className="list-title">Product</div>
                            <div className="list">Download</div>
                            <div className="list">Pricing</div>
                            <div className="list">Locations</div>
                            <div className="list">Countries</div>
                            <div className="list">Blog</div>
                        </div>
                        <div className="engage" >
                            <div className="list-title">Engage</div>
                            <div className="list">Coffe Shop ?</div>
                            <div className="list">FAQ</div>
                            <div className="list">About Us</div>
                            <div className="list">Privacy Policy</div>
                            <div className="list">Terms of Service</div>
                        </div></div>
                </div>
                <div className="space-2"></div>
            </section>
        </div>
    )
  }
}

export default withNavigate(Login)