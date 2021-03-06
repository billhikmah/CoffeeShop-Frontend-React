import React, { Component } from 'react'
import "./Payment.css"
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import getUser from "../../components/Services/getUserInfo";
import addTransaction from "../../components/Services/addTransaction.js";
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import withNavigate from "../../helpers/withNavigate";

import { connect } from "react-redux";
import { addToCart } from "../../redux/actionCreator/addToCart";

// import axios from 'axios';

export class Payment extends Component {
    state = {
        pageTitle: "payment",
        isLogin: false,
        cart: {},
        isProductAdded: false,
        editInfo: false,
        showModal: false,
        checkModal: false,
        successModal: false,
    }
    getUserInfo = () => {
        getUser()
        .then((res) => {
            this.setState({
                address: res.data.data.address,
                phone: res.data.data.phone,
                user_id: res.data.data.id
            })
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
    }
    addNewTransaction = (body, query) => {
        addTransaction(body, query)
        .then((res) => {})
        .catch((err) => {
            console.log("Error: ", err);
        });
    }
    calculatePrice = (price, totalItems) => {
        const totalPrice =(parseInt(price))*(parseInt(totalItems))*1.1
        const shipping = 10000
        const total = parseInt(totalPrice.toFixed(0)) + shipping
        this.setState({
            totalPrice: total
        })
    }
    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        const cart = this.props.cartContainer || {}
        if(this.props.cartContainer.id){
            this.setState({
                cart,
                isProductAdded: true
            })
        }
        this.getUserInfo()
        this.calculatePrice(cart.price, cart.totalItems)
        window.scrollTo(0, 0)
    }
    componentDidUpdate(){
        
    }
    render() {
        const{navigate, dispatch} = this.props
        return (
            <div >
                <Header isLogin={this.state.isLogin} pageTitle={this.state.pageTitle}/>
                <main className="payment-main">
                    <div className="page-title">Checkout your item now!</div>
                    <div className="payment-container">
                        {this.state.isProductAdded ?
                            <div className="summary">
                                <div className="summary-title">Order Summary</div>
                                <div className="summary-product" onClick={() => {
                                    navigate(`/product/details/${this.state.cart.id}`)
                                }}>
                                    <div><img src={this.state.cart.picture} alt="food-pic" className="summary-product-pic"/></div>
                                    <div className="summary-product-details">
                                        <div>{this.state.cart.name}</div>
                                        <div>x {this.state.cart.totalItems}</div>
                                        {this.state.cart.size === "R" ?
                                        <div>Regular</div>:
                                        <></>
                                        }{this.state.cart.size === "L" ?
                                        <div>Large</div>:
                                        <></>
                                        }{this.state.cart.size === "XL" ?
                                        <div>Extra Large</div>:
                                        <></>
                                        }
                                    </div>
                                    <div>IDR {this.state.cart.price}</div>
                                </div>
                                <div className="summary-calculation">
                                    <div>SUBTOTAL</div>
                                    <div>IDR {parseInt(this.state.cart.price)*parseInt(this.state.cart.totalItems)}</div>
                                    <div>TAX & FEES</div>
                                    <div>IDR {parseInt(this.state.cart.price)*parseInt(this.state.cart.totalItems) * 0.1}</div>
                                    <div>FEES SHIPPING</div>
                                    <div>IDR 10000</div>
                                </div>
                                <div className="summary-total">
                                    <div>TOTAL</div>
                                    <div>IDR {this.state.totalPrice}</div>
                                </div>
                            </div>:
                            <div className="empty-summary">
                                <div className="summary-title">The cart is empty</div>
                                <p className="summary-sub-title">No products have been added to cart yet.</p>
                                <Link to="/product" className="summary-sub-title">Click here to add product.</Link>
                            </div>
                        }
                        {this.state.isProductAdded ?
                            <div className="transaction-details">
                                <div className="details-address">
                                    <div className="details-address-label">
                                        <p className="details-address-label-title">Address details</p>
                                        <p className="details-address-edit" onClick={()=>{
                                            this.setState({
                                                editInfo: !this.state.editInfo,
                                            })
                                        }}>{this.state.editInfo === false ? <p>edit</p>:<p>save</p>}</p>
                                    </div>
                                    {this.state.editInfo === false ?
                                        <div className="details-box">
                                            <label className="input-box-info"> Delivery to </label>
                                            <label className='input-box-info input-box-mid'>{this.state.address}</label>
                                            <label className="input-box-info">{this.state.phone}</label>
                                        </div>:
                                        <div className="details-box">
                                            <label className="input-box-info"> Delivery to </label>
                                            <input type="text-area" placeholder="Adress" className="input-box-edit" value={this.state.address}
                                            onChange={(e)=>{
                                                this.setState({
                                                    address: e.target.value
                                                })
                                            }}/>
                                            <input type="tel" placeholder="Enter Phone Number" className="input-box-edit" value={this.state.phone}
                                            onChange={(e)=>{
                                                this.setState({
                                                    phone: e.target.value
                                                })
                                            }}/>
                                        </div>
                                    }
                                </div>
                                <div className="details-payment">
                                    <p className="details-payment-title">Payment method</p>
                                    <form className="details-box"  action="/action_page.php"
                                    onChange={(e) => {
                                        this.setState({
                                            paymentMethod: e.target.value
                                        })
                                    }}>
                                        <label for="card" className="payment-method">
                                            <input type="radio" name="payment" id="card" value="1"/><img src={require("../../assets/vektor/partner-logo-1.png")} alt="partner logo" className="partner-logo"/>Card
                                        </label>
                                        <label for="bank" className="payment-method payment-method-mid">
                                            <input type="radio" name="payment" id="bank" value="2"/><img src={require("../../assets/vektor/partner-logo-2.png")} alt="partner logo" className="partner-logo"/>Bank account
                                        </label>
                                        <label for="cash" className="payment-method">
                                            <input type="radio" name="payment" id="cash" value="3"/><img src={require("../../assets/vektor/partner-logo-3.png")} alt="partner logo" className="partner-logo"/>Cash on delivery
                                        </label>
                                    </form>
                                </div>
                                <div className="details-button" onClick={()=>{
                                    if(this.state.paymentMethod){
                                        return this.setState({
                                            showModal: true
                                        })
                                    }
                                    this.setState({
                                        checkModal: true
                                    })                              
                                }}>
                                    <div>Confirm and Pay</div>
                                </div>
                            </div>:
                            <></>
                        }
                    </div>
                </main>
                <Footer/>
                <Modal show={this.state.showModal} size="s" centered className="modal">
                    {/* <Modal.Header closeButton classNmae="">
                    </Modal.Header> */}
                    <Modal.Title className="modal-title">
                        Great!
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        Are you sure to checkout?
                        </p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={() => {
                            const body = {
                                product_id: parseInt(this.state.cart.id),
                                qty: this.state.cart.totalItems,
                                total_price: parseInt(this.state.totalPrice),
                                delivery_method_id: parseInt(this.state.cart.deliveryMethod),
                                payment_method_id: parseInt(this.state.paymentMethod),
                                address: this.state.address,
                                date: this.state.date
                            }
                            const query = {
                                user_id: this.state.user_id
                            }
                            this.addNewTransaction(body, query)
                            this.setState({
                                showModal: false,
                                successModal: true
                            })
                            dispatch(addToCart({}))
                        }}>
                            Continue
                        </button>
                        <button className="modal-button-close" onClick={() => {
                            this.setState({
                                showModal: false
                            })
                        }}>
                            Cancel
                        </button>
                    </div>
                </Modal>
                
                <Modal show={this.state.checkModal} size="s" centered className="modal">
                    {/* <Modal.Header closeButton classNmae="">
                    </Modal.Header> */}
                    <Modal.Title className="modal-title">
                        Sorry!
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        Please enter the payment method!
                        </p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button-close" onClick={() => {
                            this.setState({
                                checkModal: false
                            })
                        }}>
                            close
                        </button>
                    </div>
                </Modal>
                
                <Modal show={this.state.successModal} size="s" centered className="modal">
                    {/* <Modal.Header closeButton classNmae="">
                    </Modal.Header> */}
                    <Modal.Title className="modal-title">
                        Success!
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        Transaction successfully processed.
                        </p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={() => {
                            navigate("/product")
                        }}>
                            Continue
                        </button>
                    </div>
                </Modal>
            </div>  
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {cart: {cartContainer}} = reduxState
    return {
        cartContainer
    }
}

export default connect(mapStateToProps)(withNavigate(Payment))