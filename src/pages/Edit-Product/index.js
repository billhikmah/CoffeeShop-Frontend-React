import React, { Component } from 'react'
import "./Edit-Product.css"
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from "react-redux";

import withParams from "../../helpers/withParams";
import withNavigate from "../../helpers/withNavigate";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import updateProduct from "../../components/Services/updateProduct";
import {getDetails} from "../../components/Services/getProduct";


export class EditProduct extends Component {
    state = {
        isLogin: false,
        showSuccesModal: false,
        showUnsuccessModal: false,
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
    editProduct = (body, id) => {
        updateProduct(body, id)
        .then((res) => {})
        .catch((error) =>{
            console.log(error)
        })
    }
    getProductDetails(id){
        getDetails(id)
        .then((res) => {
            this.setState({
                category_id: res.data.data[0].category_id,
                delivery_method_id: res.data.data[0].delivery_method_id,
                deliveryChosen: res.data.data[0].delivery_method_id,
                description: res.data.data[0].description,
                end_hour: res.data.data[0].end_hour,
                id: res.data.data[0].id,
                input_time: res.data.data[0].input_time,
                name: res.data.data[0].name,
                picture: res.data.data[0].picture,
                price: res.data.data[0].price,
                size_id: res.data.data[0].size_id,
                sizeChosen: res.data.data[0].size_id,
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
        window.scrollTo(0, 0)
        this.getProductDetails(this.props.params.id)
    }
  render() {
    const {navigate} = this.props
    return (
        <div >
            <Header isLogin={this.state.isLogin}/>

            <div className="product-path add-path"><span className="product-path-main" onClick={() => {
                navigate("/product")
            }}>Favorite &amp; Promo</span>  &gt; <span className="color-brown">Update Product</span>
            </div>
            <main className='add-main'>
                <section className='add-left-section'>
                    <img className='add-camera-logo' src={this.state.previewSource ?
                            this.state.previewSource:
                            this.state.picture} alt="food"/>
                    <label className='add-choose-pict'><input type="file" name="image" id="upload-image" className='add-choose-pict-input'
                        onChange={(e)=>{
                            this.handleFileInputChange(e);
                            this.setState({
                                picture: e.target.files[0]
                            })
                        }}/>
                        Choose Picture
                    </label>
                    <div className='add-labels'>Delivery Hour :</div>
                    <div>
                        <form action="/action_page.php" >
                            <select id="start-hour" name="start-hour" className='add-box-input'
                                onChange={(e) => {
                                    this.setState({
                                        start_hour: e.target.value
                                    })
                                }}>
                                <option value="" disabled selected>Select start hour</option>
                                <option value="10:00:00" selected={this.state.start_hour === "10:00:00"? "selected" : ""}>10:00:00</option>
                                <option value="11:00:00" selected={this.state.start_hour === "11:00:00"? "selected" : ""}>11:00:00</option>
                                <option value="12:00:00" selected={this.state.start_hour === "12:00:00"? "selected" : ""}>12:00:00</option>
                                <option value="13:00:00" selected={this.state.start_hour === "13:00:00"? "selected" : ""}>13:00:00</option>
                                <option value="14:00:00" selected={this.state.start_hour === "14:00:00"? "selected" : ""}>14:00:00</option>
                                <option value="15:00:00" selected={this.state.start_hour === "15:00:00"? "selected" : ""}>15:00:00</option>
                                <option value="16:00:00" selected={this.state.start_hour === "16:00:00"? "selected" : ""}>16:00:00</option>
                                <option value="17:00:00" selected={this.state.start_hour === "17:00:00"? "selected" : ""}>17:00:00</option>
                                <option value="18:00:00" selected={this.state.start_hour === "18:00:00"? "selected" : ""}>18:00:00</option>
                                <option value="19:00:00" selected={this.state.start_hour === "19:00:00"? "selected" : ""}>19:00:00</option>
                            </select>
                        </form>
                        
                    </div>
                    <div>
                        <form action="/action_page.php">
                            <select id="end-hour" name="end-hour" className='add-box-input'
                                onChange={(e) => {
                                    this.setState({
                                        end_hour: e.target.value
                                    })
                                }}>
                                <option value="" disabled selected>Select end hour</option>
                                <option value="10:00:00" selected={this.state.end_hour === "10:00:00"? "selected" : ""}>10:00:00</option>
                                <option value="11:00:00" selected={this.state.end_hour === "11:00:00"? "selected" : ""}>11:00:00</option>
                                <option value="12:00:00" selected={this.state.end_hour === "12:00:00"? "selected" : ""}>12:00:00</option>
                                <option value="13:00:00" selected={this.state.end_hour === "13:00:00"? "selected" : ""}>13:00:00</option>
                                <option value="14:00:00" selected={this.state.end_hour === "14:00:00"? "selected" : ""}>14:00:00</option>
                                <option value="15:00:00" selected={this.state.end_hour === "15:00:00"? "selected" : ""}>15:00:00</option>
                                <option value="16:00:00" selected={this.state.end_hour === "16:00:00"? "selected" : ""}>16:00:00</option>
                                <option value="17:00:00" selected={this.state.end_hour === "17:00:00"? "selected" : ""}>17:00:00</option>
                                <option value="18:00:00" selected={this.state.end_hour === "18:00:00"? "selected" : ""}>18:00:00</option>
                                <option value="19:00:00" selected={this.state.end_hour === "19:00:00"? "selected" : ""}>19:00:00</option>
                            </select>
                        </form>
                    </div>
                    <div className='add-labels'>Input category</div>
                    <div>
                        <form action="/action_page.php" 
                        value={this.state.category_id}>
                            <select id="category" name="end-hour" className='add-box-input'
                                onChange={(e) => {
                                    this.setState({
                                        category_id: e.target.value
                                    })
                                }}>
                                <option value="" disabled selected>Select category</option>
                                <option value="1" selected={this.state.category_id === 1? "selected" : ""}>Coffee</option>
                                <option value="2" selected={this.state.category_id === 2? "selected" : ""}>Noncoffee</option>
                                <option value="3" selected={this.state.category_id === 3? "selected" : ""}>Food</option>
                            </select>
                        </form>
                    </div>
                    <div className='add-labels'>Input Stock</div>
                    <div>
                        <input type="number" className='add-box-input' placeholder='Input stock'
                        value={this.state.stock}
                            onChange={(e) => {
                                this.setState({
                                    stock: e.target.value
                                })
                            }}/>
                    </div>
                </section>
                <section className='add-right-section'>
                    <div>
                        <div className='add-labels'>Name:</div>
                        <div><input type="text" className='add-type-input' placeholder='Type product name min. 50 characters'
                        value={this.state.name}
                            onChange={(e) => {
                                this.setState({
                                    name: e.target.value
                                })
                            }}/></div>
                    </div>
                    <div>
                        <div className='add-labels'>Price:</div>
                        <div><input type="number" className='add-type-input' placeholder='Type the price'
                        value={this.state.price}
                            onChange={(e) => {
                                this.setState({
                                    price: e.target.value
                                })
                            }}/></div></div>
                    <div>
                        <div className='add-labels'>Description:</div>
                        <div><input type="text" className='add-type-input' placeholder='Describe your product min. 150 characters'
                        value={this.state.description}
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
                            category_id: this.state.category_id,
                            delivery_method_id: this.state.delivery_method_id,
                            description: this.state.description,
                            start_hour: this.state.start_hour,
                            end_hour: this.state.end_hour,
                            stock: this.state.stock,
                            picture: this.state.picture,
                        }
                        let body = new FormData();
                        body = {...body, ...data};
                        if(this.state.name === "" || this.state.size_id === "" || this.state.price === "" || this.state.category_id === "" || this.state.delivery_method_id === "" || this.state.description ==="" || this.state.start_hour === "" || this.state.end_hour === "" || this.state.stock === "" || this.state.picture === ""){
                            return this.setState({
                                showUnsuccessModal: true
                            })
                        }
                        this.editProduct(body, this.state.id)
                        this.setState({
                            showSuccesModal: true
                        })
                    }}>
                        Save Product
                    </div>
                    <div className='add-cancel-button' onClick={() => {navigate(`/product/details/${this.state.id}`)}}>Cancel</div>
                </section>
            </main>
            <Footer/>
            
            <Modal show={this.state.showSuccesModal} size="s" centered className="modal">
                <Modal.Title className="modal-title">
                Success!
                    </Modal.Title>
                <Modal.Body className="modal-body">
                    <p>
                    Product has been updated.
                    </p>
                </Modal.Body>
                <div className="modal-footer">
                    <button className="modal-button-close" onClick={() => {
                        this.setState({
                            showSuccesModal: false,
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
                    You must fill all fields before saving the product.
                    </p>
                </Modal.Body>
                <div className="modal-footer">
                    <button className="modal-button-close" onClick={() => {
                        this.setState({
                            showUnsuccessModal: false
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
export default connect(mapStateToProps)(withParams(withNavigate(EditProduct)))