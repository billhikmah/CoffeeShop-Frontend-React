import React, { Component } from 'react'
import "./Auth.css"
import {Link} from "react-router-dom";
import axios from 'axios';
import Footer from "../../components/Footer/Footer";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import withNavigate from "../../helpers/withNavigate";

export class Auth extends Component {
    state = {
        email: "",
        password: "",
        phone: "",
        isPasswordShown: false,
        isError: false,
        errorMessage: "",
        successMessage: "",
        showModal: false
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }    
        
    render() {
        const { navigate } = this.props;
        return (
            <div className="col-s-12 col-m-12 col-l-12 col-xl-12">
                <section className="su-container cols-s-12 col-m-12 col-l-12 col-xl-12">
                    <div className="su-aside-content col-s-none col-m-4 col-l-6 col-xl-6">
                        <img src={require("../../assets/side-pict.jpeg")} alt="side-pict" className="aside-image col-s-none col-m-12 col-l-12 col-xl-12"/>
                    </div>

                    <div className="su-main-content col-s-12 col-m-8 col-l-6 col-xl-6">

                        <div className ="flex-container col-s-12 col-m-12 col-l-12 col-xl-12">
                            <Link to="/" className="su-title">
                                <img src={require("../../assets/stock1.png")} className="su-image-1" alt='logo'/>
                                CoffeShop
                            </Link>
                            <Link to="/login" className="login">
                                Log in
                            </Link>
                        </div>

                        <div className="flex-container-2">
                            <div className="subtitle">
                                Sign Up
                            </div>
                        </div>

                        <form className="form margin col-s-12 col-m-8 col-l-8 col-xl-8">

                            <label htmlFor="email" className="form-label col-s-11 col-m-11 col-l-12 margin">
                                Email Address:
                            </label>
                            <input
                            className="form-input col-s-11 col-m-11 col-l-12 s-height margin" type="email"
                            name="email"
                            placeholder="Enter your email adress"
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
                                        <span class="material-symbols-outlined">
                                            visibility
                                        </span>:
                                        <span class="material-symbols-outlined">
                                        visibility_off
                                        </span>
                                    }
                                    
                                </i>
                            </div>


                            <label htmlFor="phone" className="form-label col-s-11 col-m-11 col-l-12 margin">
                                Phone Number:
                            </label>
                            <input
                            className="form-input col-s-11 col-m-11 col-l-12 s-height margin"
                            type="tel" 
                            name="phone" 
                            placeholder="Enter your phone number"
                            onChange={(e) => {
                                this.setState ({
                                    phone: e.target.value
                                })
                            }}/>

                            {this.state.isError ?
                            <p className="errorMessage">{this.state.errorMessage}</p>:
                            <p className="successMessage">{this.state.successMessage}</p>}

                            <div className="button col-s-11 col-m-11 col-l-12 margin s-height" id="button-1" onClick={async () => {
                                const {email, password, phone} = this.state
                                const body = {
                                    email: email,
                                    password: password,
                                    phone: phone
                                }
                                await axios.post("https://starbills.herokuapp.com/auth/new", body)
                                .then((result) => {
                                this.setState({
                                    isError: false,
                                    successMessage: "Sign up success, please login.",
                                    showModal: true
                                })})
                                .catch((error) => {
                                    this.setState({
                                        isError: true,
                                        errorMessage: error.response.data.err.msg
                                    })
                                })
                            }}>
                                Sign Up
                            </div>

                            <div className="button button-2 col-s-11 col-m-11 col-l-12 s-height margin" id="button-2">
                                <img className="su-image-2 " src={require("../../assets/stock2.png")} alt='google-logo'/>
                                <div className="sub-buton-2">
                                    Sign up with Google
                                </div>
                            </div>

                        </form>
                    </div>
                </section>

                <section className="su-box col-s-12 margin">
                    <div className="box-1-left col-s-11 margin">
                        <div className="col-s-11 box-1-left-1">
                            Get your member card now!
                        </div>
                        <div className="box-1-left-2">
                            Let's join with our member and enjoy the deals.
                        </div>
                    </div>
                    <div className="box-1-right col-s-11 s-height margin">
                        Create Now
                    </div>
                </section>

                <Footer/>

                <Modal show={this.state.showModal} size="s" centered className="modal">
                    {/* <Modal.Header closeButton classNmae="">
                    </Modal.Header> */}
                    <Modal.Title className="modal-title">
                        Great!
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        Your account has been created successfully
                        </p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={() => {
                            navigate("/login");
                        }}>
                            Start Exploring
                        </button>
                        <button className="modal-button-close" onClick={() => {
                            this.setState({
                                showModal: false
                            })
                        }}>
                            Close
                        </button>
                    </div>
                </Modal>
                
            </div>
        )
    }
}

export default withNavigate(Auth)