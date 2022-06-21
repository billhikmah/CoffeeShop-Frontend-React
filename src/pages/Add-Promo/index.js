import React, { Component } from 'react'
import "./Add-Promo.css"
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from "react-redux";

import withParams from "../../helpers/withParams";
import withNavigate from "../../helpers/withNavigate";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import addPromo from "../../components/Services/addPromo";


export class AddPromo extends Component {
    state = {
        isLogin: false,
        showSuccesModal: false,
        showUnsuccessModal: false,
        name: "",
        size_id: "",
        price: "",
        delivery_method_id: "",
        description: "",
        start_date: "",
        end_date: "",
        stock: "",
        picture: "",
        coupon_code: "",
    };
    handleFileInputChange = (e) => {
        const file = e.target.files[0];
        this.setState({
            selectedFile:e.target.file
        })
        this.previewFile(file);
    }
    previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            this.setState({
                previewSource: reader.result
            })
        }
    }
    addNewPromo = (body) => {
        addPromo(body)
        .then((res) => {
            console.log(res)
            this.setState({
                id: res.data.data.id
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        window.scrollTo(0, 0)
    }
  render() {
    const {navigate} = this.props
    return (
        <div >
            <Header isLogin={this.state.isLogin}/>

            <div className="product-path add-path"><span className="product-path-main" onClick={() => {
                navigate("/product")
            }}>Favorite &amp; Promo</span>  &gt; <span className="color-brown">Add New Promo</span>
            </div>
            <main className='add-main'>
                <section className='add-left-section'>
                    <img className='add-camera-logo' src={this.state.previewSource ?
                            this.state.previewSource:
                            require("../../assets/vektor/camera-logo.png")} alt="product-preview"/>
                    <label className='add-choose-pict'><input type="file" name="image" id="upload-image" className='add-choose-pict-input'
                        onChange={(e)=>{
                            this.handleFileInputChange(e);
                            this.setState({
                                picture: e.target.files[0]
                            })
                        }}/>
                        Choose Picture
                    </label>
                    
                    <div className='add-labels'>Enter the discount</div>
                    <div>
                        <form action="/action_page.php">
                            <input type="number" id="category" name="end-hour" className='add-box-input' placeholder='Input discount'
                                onChange={(e) => {
                                    this.setState({
                                        disc: e.target.value
                                    })
                                }}
                            />
                        </form>
                    </div>
                    <div className='add-labels'>Expire date :</div>
                    <div>
                        <form action="/action_page.php" >
                            <input type="text" id="start-hour" name="start-hour" className='add-box-input' value={this.state.start_date} placeholder="Select start date"
                                onFocus={(e) => (e.target.type = "datetime-local")}
                                onBlur={(e) => (e.target.type = "text")}
                                onChange={(e) => {
                                    this.setState({
                                        start_date: e.target.value
                                    })
                                }}
                            />
                        </form>
                        
                    </div>
                    <div>
                        <form action="/action_page.php">
                            <input type="text" id="end-hour" name="end-hour" className='add-box-input' value={this.state.end_date}placeholder="Select end date"
                                onFocus={(e) => (e.target.type = "datetime-local")}
                                onBlur={(e) => (e.target.type = "text")}
                                onChange={(e) => {
                                    this.setState({
                                        end_date: e.target.value
                                    })
                                }}
                            />
                        </form>
                    </div>
                    <div className='add-labels'>Input coupon code</div>
                    <div>
                        <input type="number" className='add-box-input' placeholder='Input coupon code'
                            onChange={(e) => {
                                this.setState({
                                    coupon_code: e.target.value
                                })
                            }}/>
                    </div>
                </section>
                <section className='add-right-section'>
                    <div>
                        <div className='add-labels'>Name:</div>
                        <div><input type="text" className='add-type-input' placeholder='Type product name min. 50 characters'
                            onChange={(e) => {
                                this.setState({
                                    name: e.target.value
                                })
                            }}/></div>
                    </div>
                    <div>
                        <div className='add-labels'>Normal Price:</div>
                        <div><input type="number" className='add-type-input' placeholder='Type the normal price'
                            onChange={(e) => {
                                this.setState({
                                    price: e.target.value
                                })
                            }}/></div></div>
                    <div>
                        <div className='add-labels'>Description:</div>
                        <div><input type="text" className='add-type-input' placeholder='Describe your product min. 150 characters'
                            onChange={(e) => {
                                this.setState({
                                    description: e.target.value
                                })
                            }}/></div>
                    </div>
                    <div>
                        <div className='add-labels'>Input product size :</div>
                        <div className='add-sublabel'>Click size you want to use for this product</div>
                        <div className='add-choose-size'>
                            <div className={`add-size-choices-type-1 ${this.state.sizeChosen === 1 ? "add-size-chosen" : "add-size-choices "}`}
                            onClick={(e) => {
                                this.setState({
                                    size_id: 1,
                                    sizeChosen: 1
                                })
                            }}>R</div>
                            <div className={`add-size-choices-type-1 ${this.state.sizeChosen === 2 ? "add-size-chosen" : "add-size-choices "}`}
                            onClick={(e) => {
                                this.setState({
                                    size_id: 2,
                                    sizeChosen: 2
                                })
                            }}>L</div>
                            <div className={`add-size-choices-type-1 ${this.state.sizeChosen === 3 ? "add-size-chosen" : "add-size-choices "}`}
                            onClick={(e) => {
                                this.setState({
                                    size_id: 3,
                                    sizeChosen: 3
                                })
                            }}>XL</div>
                            <div className={`add-size-choices-type-2 ${this.state.sizeChosen === 4 ? "add-size-chosen" : "add-size-choices "}`}
                            onClick={(e) => {
                                this.setState({
                                    size_id: 4,
                                    sizeChosen: 4
                                })
                            }}>250 gr</div>
                            <div className={`add-size-choices-type-2 ${this.state.sizeChosen === 5 ? "add-size-chosen" : "add-size-choices "}`}
                            onClick={(e) => {
                                this.setState({
                                    size_id: 5,
                                    sizeChosen: 5
                                })
                            }}>300 gr</div>
                            <div className={`add-size-choices-type-2 ${this.state.sizeChosen === 6 ? "add-size-chosen" : "add-size-choices "}`}
                            onClick={(e) => {
                                this.setState({
                                    size_id: 6,
                                    sizeChosen: 6
                                })
                            }}>500 gr</div>
                        </div>
                    </div>
                    <div>
                        <div className='add-labels'>Input delivery methods :</div>
                        <div className='add-sublabel'>Click methods you want to use for this product</div>
                        <div className='add-delivery-methode'>
                            <div className={this.state.deliveryChosen === 1 ? "add-delivery-chosen" : "add-delivery-choices"}
                            onClick={(e) => {
                                this.setState({
                                    delivery_method_id: 1,
                                    deliveryChosen: 1
                                })
                            }}>Home Delivery</div>
                            <div className={this.state.deliveryChosen === 2 ? "add-delivery-chosen" : "add-delivery-choices"}
                            onClick={(e) => {
                                this.setState({
                                    delivery_method_id: 2,
                                    deliveryChosen: 2
                                })
                            }}>Dine in</div>
                            <div className={this.state.deliveryChosen === 3 ? "add-delivery-chosen" : "add-delivery-choices"}
                            onClick={(e) => {
                                this.setState({
                                    delivery_method_id: 3,
                                    deliveryChosen: 3
                                })
                            }}>Take away</div>
                        </div>
                    </div>
                    <div className='add-save-button' onClick={(e)=>{
                        e.preventDefault();
                        const data={
                            name: this.state.name,
                            size_id: this.state.size_id,
                            price: this.state.price,
                            coupon_code: this.state.coupon_code,
                            disc: this.state.disc,
                            delivery_method_id: this.state.delivery_method_id,
                            description: this.state.description,
                            start_date: this.state.start_date,
                            end_date: this.state.end_date,
                            picture: this.state.picture,
                        }
                        let body = new FormData();
                        body = {...body, ...data};
                        if(this.state.name === "" || this.state.size_id === "" || this.state.price === "" || this.state.coupon_code === "" || this.state.delivery_method_id === "" || this.state.description ==="" || this.state.start_date === "" || this.state.end_date === "" || this.state.disc === "" || this.state.picture === ""){
                            console.log(data)
                            return this.setState({
                                showUnsuccessModal: true
                            })
                        }
                        console.log(body);
                        this.addNewPromo(body)
                        this.setState({
                            showSuccesModal: true
                        })
                    }}>
                        Save Promo
                    </div>
                    <div className='add-cancel-button' onClick={() => {navigate("/product")}}>Cancel</div>
                </section>
            </main>
            <Footer/>
            
            <Modal show={this.state.showSuccesModal} size="s" centered className="modal">
                <Modal.Title className="modal-title">
                Success!
                    </Modal.Title>
                <Modal.Body className="modal-body">
                    <p>
                    Promo has been added.
                    </p>
                </Modal.Body>
                <div className="modal-footer">
                    <button className="modal-button-close" onClick={() => {
                        this.setState({
                            showSuccesModal: false,
                            isEdit: false,
                        })
                        navigate(`/product/details/${this.state.id}`)
                    }}>
                        Okay
                    </button>
                </div>
            </Modal>
            <Modal show={this.state.showUnsuccessModal} size="s" centered className="modal">
                <Modal.Title className="modal-title">
                Sorry!
                    </Modal.Title>
                <Modal.Body className="modal-body">
                    <p>
                    You must fill all fields before saving the promo.
                    </p>
                </Modal.Body>
                <div className="modal-footer">
                    <button className="modal-button-close" onClick={() => {
                        this.setState({
                            showUnsuccessModal: false,
                            isEdit: false,
                        })
                    }}>
                        Okay
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
export default connect(mapStateToProps)(withParams(withNavigate(AddPromo)))