import React, { Component } from 'react'
import "./Product_details.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from "react-redux";
import { addToCart } from "../../redux/actionCreator/addToCart";

import withParams from "../../helpers/withParams";
import withNavigate from "../../helpers/withNavigate";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import {getDetails} from "../../components/Services/getProduct";

export class Product_details extends Component {
    state = {
        isLogin: false,
        sizeChosen: "",
        deliveryChosen: "",
        totalItems: 0,
        showModal: false,
        productCheckModal: false
    };
    getProductDetails(id){
        getDetails(id)
        .then((res) => {
            this.setState({
                category_id: res.data.data[0].category_id,
                delivery_method_id: res.data.data[0].delivery_method_id,
                description: res.data.data[0].description,
                end_hour: res.data.data[0].end_hour,
                id: res.data.data[0].id,
                input_time: res.data.data[0].input_time,
                name: res.data.data[0].name,
                picture: res.data.data[0].picture,
                price: res.data.data[0].price,
                size_id: res.data.data[0].size_id,
                start_hour: res.data.data[0].start_hour,
                stock: res.data.data[0].stock,
            });
        })
        .catch((err) => {
            console.log("Error", err);
        });
    };
    componentDidMount(){
        
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        this.getProductDetails(this.props.params.id)
        if(this.props.cartContainer !== {} && this.props.cartContainer.id === this.props.params.id){
            this.setState({
                sizeChosen: this.props.cartContainer.size,
                deliveryChosen: this.props.cartContainer.deliveryMethod,
                date: this.props.cartContainer.date,
                totalItems: this.props.cartContainer.totalItems
            })
        }

    }
  render() {
    const {navigate, dispatch} = this.props
    return (
        <div >
            <Header isLogin={this.state.isLogin}/>

            <div className="product-path"><span className="product-path-main" onClick={() => {
                navigate("/product")
            }}>Favorite &amp; Promo</span>  &gt; <span className="color-brown">{this.state.name}</span>
            </div>

            <main className="main-product-details">
                
                <div className="container-product-details">
                    <div className="container-1">
                        <div>
                            <img src={`http://localhost:8080${this.state.picture}`} alt="food-pic" className="product-details-pic"/>
                        </div>
                        <div className="product-details-name">{this.state.name}</div>
                        <div className="product-details-price">IDR {this.state.price}</div>
                        <div className="add-to-chart" onClick={()=>{
                            dispatch(addToCart({
                                name: this.state.name,
                                picture: this.state.picture,
                                totalItems: this.state.totalItems,
                                size: this.state.sizeChosen,
                                price: this.state.price,
                                deliveryMethod: this.state.deliveryChosen,
                                date: this.state.date, 
                                id: this.state.id
                            }))
                            this.setState({
                                showModal: true
                            })                            
                        }}>Add to Cart</div>
                        <div className="ask-a-staff">Ask a Staff</div>
                    </div>
                    <div className="container-2">
                        <div className="container-product-desc">
                            <div className="product-scredule">Delivery only on <span className="weight-1000">Monday to Friday</span> at  <span className="weight-1000">1 - 7 pm</span></div>
                            <div>{this.state.description}</div>
                            <div className="choose-size">Choose a size</div>
                            <div className="size-choices-container">
                                <div className={this.state.sizeChosen === "R" ? "size-chosen" : "size-choices"} onClick={() => {
                                    this.setState({
                                        sizeChosen: "R",
                                        totalItems: 1,
                                    })
                                }}>R</div>
                                <div className={this.state.sizeChosen === "L" ? "size-chosen" : "size-choices"} onClick={() => {
                                    this.setState({
                                        sizeChosen: "L",
                                        totalItems: 1,
                                    })
                                }}>L</div>
                                <div className={this.state.sizeChosen === "XL" ? "size-chosen" : "size-choices"} onClick={() => {
                                    this.setState({
                                        sizeChosen: "XL",
                                        totalItems: 1,
                                    })
                                }}>XL</div>
                            </div>
                        </div>
                        <div className="choose-delivery">Choose Delivery Methods</div>
                        <div className="delivery-choices-container">
                            <div className={this.state.deliveryChosen === "1" ? "delivery-chosen" : "delivery-not-chosen"} onClick={() => {
                                this.setState({
                                    deliveryChosen: "1"
                                })
                            }}>Dine in</div>
                            <div className={this.state.deliveryChosen === "2" ? "delivery-chosen" : "delivery-not-chosen"} onClick={() => {
                                this.setState({
                                    deliveryChosen: "2"
                                })
                            }}>Door Delivery</div>
                            <div className={this.state.deliveryChosen === "3" ? "delivery-chosen" : "delivery-not-chosen"} onClick={() => {
                                this.setState({
                                    deliveryChosen: "3"
                                })
                            }}>Pick up</div>
                        </div>
                        <div className="set-time-container">
                            <label htmlFor="set-time"  className="set-time">Set time :<input type="text"
                            placeholder="Enter the time you’ll arrived" className="input-time"
                            value={this.state.date}
                            onFocus={(e) => (e.target.type = "datetime-local")}
                            onBlur={(e) => (e.target.type = "text")}
                            onChange={(e)=>{
                                this.setState({
                                    date: e.target.value
                                })
                            }}/>
                            </label>
                        </div>
                    </div>
                </div>
                {this.state.sizeChosen  ?
                    <section className="box-items">
                        <div className="box-items-details">
                            <div className="box-items-details-pic"><img src={`http://localhost:8080${this.state.picture}`} alt="food-pic" className="items-pic"/></div>
                            <div className="box-items-details-transaction">
                                <div className="item-name">{this.state.name}</div>
                                
                                <div className="box-items-details-count-container">
                                    {this.state.sizeChosen === "R"?
                                        <div className="item-size">x{this.state.totalItems} (Regular)</div>:
                                        <></>
                                    }
                                    {this.state.sizeChosen === "L"?
                                        <div className="item-size">x{this.state.totalItems} (Large)</div>:
                                        <></>
                                    }
                                    {this.state.sizeChosen === "XL"?
                                        <div className="item-size">x{this.state.totalItems} (Extra Large)</div>:
                                        <></>
                                    }
                                    <div className="box-items-details-count">
                                        <div className="count-button" onClick={() => {
                                            let newTotal = this.state.totalItems;
                                            if(this.state.totalItems != 10){
                                                newTotal = this.state.totalItems + 1;
                                            }
                                            this.setState({
                                                totalItems: newTotal,
                                            })
                                        }}>+</div>{this.state.totalItems}
                                        <div className="count-button" onClick={() => {
                                            let newTotal = this.state.totalItems;
                                            if(this.state.totalItems != 1){
                                                newTotal = this.state.totalItems - 1;
                                                return this.setState({
                                                    totalItems: newTotal,
                                                })
                                            }
                                            this.setState({
                                                totalItems: 0,
                                                sizeChosen: ""
                                            })
                                        }}>-</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="checkout-button" onClick={() => {
                            dispatch(addToCart({
                                name: this.state.name,
                                picture: this.state.picture,
                                totalItems: this.state.totalItems,
                                size: this.state.sizeChosen,
                                price: this.state.price,
                                deliveryMethod: this.state.deliveryChosen,
                                date: this.state.date,
                                id: this.state.id
                            }))
                            {!this.state.sizeChosen || !this.state.deliveryChosen || !this.state.date ?
                                this.setState({
                                    productCheckModal: true,
                                }):
                                navigate("/payment")
                            }
                            
                        }}>CHECKOUT</div>
                    </section>:
                    <></>
                }
            </main>
            <Footer/>
            {!this.state.sizeChosen || !this.state.deliveryChosen || !this.state.date ?
            <Modal show={this.state.showModal} size="s" centered className="modal">
                <Modal.Title className="modal-title">
                    Sorry!
                    </Modal.Title>
                <Modal.Body className="modal-body">
                    <p>
                    Please enter size, delivery method, and delivery time.
                    </p>
                </Modal.Body>
                <div className="modal-footer">
                    <button className="modal-button-close" onClick={() => {
                        this.setState({
                            showModal: false
                        })
                    }}>
                        Close
                    </button>
                </div>
            </Modal>:
            <Modal show={this.state.showModal} size="s" centered className="modal">
                <Modal.Title className="modal-title">
                    Success!
                    </Modal.Title>
                <Modal.Body className="modal-body">
                    <p>
                    Product has been added to cart.
                    </p>
                </Modal.Body>
                <div className="modal-footer">
                    <button className="modal-button" onClick={() => {
                        navigate("/payment");
                    }}>
                        Checkout
                    </button>
                    <button className="modal-button-close" onClick={() => {
                        this.setState({
                            showModal: false
                        })
                    }}>
                        Close
                    </button>
                </div>
            </Modal>}
            
            <Modal show={this.state.productCheckModal} size="s" centered className="modal">
                <Modal.Title className="modal-title">
                    Sorry!
                    </Modal.Title>
                <Modal.Body className="modal-body">
                    <p>
                    Please enter size, delivery method, and delivery time.
                    </p>
                </Modal.Body>
                <div className="modal-footer">
                    <button className="modal-button-close" onClick={() => {
                        this.setState({
                            productCheckModal: false
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
const mapStateToProps = (reduxState) => {
    const {cart: {cartContainer}} = reduxState
    return {
        cartContainer
    }
}
export default connect(mapStateToProps)(withParams(withNavigate(Product_details)))