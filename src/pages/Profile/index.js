import React, { Component } from 'react'
import "./Profile.css"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import getUser from "../../components/Services/getUserInfo";
import updateMyProfile from "../../components/Services/updateProfile"
import accountLogin from "../../components/Services/login";

import withNavigate from "../../helpers/withNavigate";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Profile extends Component {
    state = {
        isEdit: false,
        isLogin: false,
        showModal: false,
        showSuccesModal: false,
        isPasswordMatch: true,
        fileInput: "",
        selectedFile: "",
        errorMessage: "",
        email: "",
        address: "",
        created_at: "",
        date_of_birth: "",
        display_name: "",
        first_name: "",
        id: "",
        last_name: "",
        phone: "",
        picture: "",
        sex_id: ""
    }
    getProfile = () => {
        getUser()
        .then((result) => {
            this.setState({
              address: result.data.data.address,
              address_show: result.data.data.address,
              created_at: result.data.data.created_at,
              date_of_birth: result.data.data.date_of_birth,
              date_of_birth_show: result.data.data.date_of_birth,
              display_name: result.data.data.display_name,
              display_name_show: result.data.data.display_name,
              email: result.data.data.email,
              email_show: result.data.data.email,
              first_name: result.data.data.first_name,
              first_name_show: result.data.data.first_name,
              id: result.data.data.id,
              last_name: result.data.data.last_name,
              last_name_show: result.data.data.last_name,
              password: result.data.data.password,
              phone: result.data.data.phone,
              phone_show: result.data.data.phone,
              picture: result.data.data.picture,
              sex_id: result.data.data.sex_id,
              sex_id_show: result.data.data.sex_id
            })
        })
        .catch((error) => {
            console.log(error.response) })
    }
    updateProfile= (body) => {
        updateMyProfile(body)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    checkPassword = (body) => {
        accountLogin(body)
        .then((res) => {
            this.setState({
                error: false,
                errorMessage: ""
            })
        })
        .catch((error) => {
            this.setState({
                error: true,
                errorMessage: "Password is incorrect"
            })
        })
    }
    confirmPassword = (oldPassword, newPassword, confirmPassword) => {
        if(oldPassword === newPassword){
            return this.setState({
                isMatched: false,
                errorConfirmMessage: "You cannot use the same password."
            })
        }
        if(newPassword !== confirmPassword){
            return this.setState({
                isMatched: false,
                errorConfirmMessage: "Passwords do not match"
            })
        }
        return this.setState({
            isMatched: true,
        })
    }
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
    uploadImage = (base64EncodedImage) => {
        console.log(base64EncodedImage)
    }
    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        window.scrollTo(0, 0)
        this.getProfile()
        
    }

    render() {
        const {navigate} = this.props;
        return (
            <div >
                <Header isLogin={this.state.isLogin}/>
                <main className="profile-main">
                    <div className="profile-page-title">User Profile</div>
                    <div className="profile-profile-container">
                        <div className="profile-side-tab">
                            <div className="profile-image-container"><img className="profile-image-2" src={this.state.previewSource ?
                            this.state.previewSource:
                            `https://starbills.herokuapp.com${this.state.picture}`} alt="profile"/></div>
                            <div className="profile-name">{this.state.display_name}</div>
                            <div className="profile-email">{this.state.email}</div>
                            <label className={this.state.isEdit === true ? "" : "hide"} for="upload-image">
                                <input className="profile-choose-photo"
                                type="file" name="image" id="upload-image"
                                onChange={(e)=>{
                                    this.handleFileInputChange(e);
                                    // const body = 
                                    // let body = new FormData();
                                    // body.append('picture', e.target.files[0]);
                                    this.setState({
                                        picture: e.target.files[0]
                                    })
                                }}
                                value={this.state.fileInput}/>
                            </label>

                            <div className={this.state.isEdit === true ? "profile-remove-photo" : "hide"}>
                                remove
                            </div>

                            <div className={this.state.isEdit === true ? "profile-edit" : "hide"}
                            onClick={() => {
                                this.setState({
                                    showEditPassword: true
                                })
                            }}>Edit Password</div>

                            <div className={this.state.isEdit === true ? "profile-question-box" : "hide"}>Do you want to save the change?</div>
                            <div className={this.state.isEdit === true ? "profile-save" : "hide"}
                            onClick={(e)=>{
                                e.preventDefault();

                                const data = {
                                    address: this.state.address_show,
                                    date_of_birth: this.state.date_of_birth_show,
                                    display_name: this.state.display_name_show,
                                    email: this.state.email_show,
                                    first_name: this.state.first_name_show,
                                    last_name: this.state.last_name_show,
                                    password: this.state.password,
                                    phone: this.state.phone_show,
                                    sex_id: this.state.sex_id_show,
                                    picture: this.state.picture
                                }
                                let body = new FormData();
                                body.append('picture', this.state.picture);
                                
                                this.updateProfile(body)
                                this.setState({
                                    showSuccesModal: true,
                                    address: this.state.address_show,
                                    date_of_birth: this.state.date_of_birth_show,
                                    display_name: this.state.display_name_show,
                                    email: this.state.email_show,
                                    first_name: this.state.first_name_show,
                                    last_name: this.state.last_name_show,
                                    phone: this.state.phone_show,
                                    sex_id: this.state.sex_id_show
                                })
                            }}>Save Change</div>


                            <div className={this.state.isEdit === true ? "profile-cancel" : "hide"} onClick={()=>{
                                this.setState({
                                    isEdit: false,
                                    address_show: this.state.address,
                                    date_of_birth_show: this.state.date_of_birth,
                                    display_name_show: this.state.display_name,
                                    email_show: this.state.email,
                                    first_name_show: this.state.first_name,
                                    last_name_show: this.state.last_name,
                                    phone_show: this.state.phone,
                                    sex_id_show: this.state.sex_id
                                })
                            }}>Cancel</div>
                            <div className="profile-logout"
                            onClick={() => {
                                this.setState({
                                    showModal: true,
                                    
                                })
                            }}>Log out</div>
                        </div>
                        <div className="profile-main-tab">
                            <div className="profile-main-container">
                                <div className="profile-form">
                                    <img className={this.state.isEdit === false ?"profile-logo-pencil": "hide"}
                                    src={require("../../assets/pencil.png")} alt="pencil-logo-update"
                                    onClick={() => {
                                        this.setState({
                                            isEdit: !this.state.isEdit,
                                        })
                                    }}/>
                                    <div className="profile-form-tittle">Contacts</div>
                                    {this.state.isEdit === true ?
                                        <div className="profile-form-contacts">
                                            <div className="profile-left-column">
                                                <label className="profile-label" htmlFor="email">Email Address :</label>
                                                <input className="profile-left-input" type="email" name="email" value={this.state.email_show}  onChange={(event) => {
                                                    const newEmail = event.target.value
                                                    this.setState({
                                                        email_show: newEmail
                                                        
                                                    });
                                                }}/>
                                                <label className="profile-label" htmlFor="address">Delivery Address :</label>
                                                <textarea className="profile-left-input" name="address" rows="1" cols="70" value={this.state.address_show} onChange={(event) => {
                                                    this.setState({
                                                        address_show: event.target.value,
                                                    });
                                                }}/>
                                            </div>
                                            <div className="profile-right-column">
                                                <label className="profile-label" htmlFor="phone">Mobile Number :</label>
                                                <input className="profile-right-input" type="tel" name="phone" value={this.state.phone_show}  onChange={(event) => {
                                                    this.setState({
                                                        phone_show: event.target.value,
                                                    });
                                                }}/>
                                            </div>
                                        </div>:
                                        <div className="profile-form-contacts">
                                            <div className="profile-left-column">
                                                <label className="profile-label" htmlFor="email">Email Address :</label>
                                                <div className="profile-left-input" type="email" name="email">{this.state.email_show}</div>
                                                <label className="profile-label" htmlFor="address">Delivery Address :</label>
                                                <div className="profile-left-input" name="address" rows="1" cols="70">{this.state.address_show}</div>
                                            </div>
                                            <div className="profile-right-column">
                                                <label className="profile-label" htmlFor="phone">Mobile Number :</label>
                                                <div className="profile-right-input" type="tel" name="phone">{this.state.phone_show}</div>
                                            </div>
                                        </div>
                                    }
                                </div>


                                <div className="profile-form">
                                    <div className="profile-form-tittle">Details</div>
                                    {this.state.isEdit === true ?
                                        <div className="profile-form-details">
                                            <div className="profile-left-column">
                                                <label className="profile-label" htmlFor="display_name">Display name :</label>
                                                <input className="profile-left-input" type="text" name="display_name" value={this.state.display_name_show} onChange={(event) => {
                                                    this.setState({
                                                        display_name_show: event.target.value,
                                                        });}}/>
                                                <label className="profile-label" htmlFor="first_name">First name :</label>
                                                <input className="profile-left-input" type="text" name="first_name" value={this.state.first_name_show} onChange={(event) => {
                                                    this.setState({
                                                        first_name_show: event.target.value,
                                                        });}}/>
                                                <label className="profile-label" htmlFor="last_name">Last name :</label>
                                                <input className="profile-left-input" type="text" name="last_name" value={this.state.last_name_show} onChange={(event) => {
                                                    this.setState({
                                                        last_name_show: event.target.value,
                                                        });}}/>
                                            </div>
                                            <div className="profile-right-column">
                                                <label className="profile-label" htmlFor="birthday">DD//MM//YY</label>
                                                <input className="profile-right-input" type="date" name="birthday" value={this.state.date_of_birth_show} onChange={(event) => {
                                                    this.setState({
                                                        date_of_birth_show: event.target.value,
                                                        });}}/></div>

                                        </div>:
                                        <div className="profile-form-details">
                                            <div className="profile-left-column">
                                                <label className="profile-label" htmlFor="display_name">Display name :</label>
                                                <div className="profile-left-input" type="text" name="display_name">{this.state.display_name_show}</div>
                                                <label className="profile-label" htmlFor="first_name">First name :</label>
                                                <div className="profile-left-input" type="text" name="first_name">{this.state.first_name_show}</div>
                                                <label className="profile-label" htmlFor="last_name">Last name :</label>
                                                <div className="profile-left-input" type="text" name="last_name">{this.state.last_name_show}</div>
                                            </div>
                                            <div className="profile-right-column">
                                                <label className="profile-label" htmlFor="birthday">DD//MM//YY</label>
                                                <div className="profile-right-input" type="date" name="birthday">{this.state.date_of_birth_show}</div>
                                            </div>
    
                                        </div>    
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
                <Modal show={this.state.showModal} size="s" centered className="modal">
                    <Modal.Title className="modal-title">
                    LOG OUT
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        Are you sure you want to log out?
                        </p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/");
                        }}>
                            Log Out
                        </button>
                        <button className="modal-button-close" onClick={() => {
                            this.setState({
                                showModal: false
                            })
                        }}>
                            Back
                        </button>
                    </div>
                </Modal>
                <Modal show={this.state.showSuccesModal} size="s" centered className="modal">
                    <Modal.Title className="modal-title">
                    Success!
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        Your profile has been updated
                        </p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button-close" onClick={() => {
                            this.setState({
                                showSuccesModal: false,
                                isEdit: false,
                            })
                        }}>
                            Okay
                        </button>
                    </div>
                </Modal>
                <Modal show={this.state.showEditPassword} size="s" centered className="modal">
                    <Modal.Title className="modal-title">
                    Change Password
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <label htmlFor="password" className="edit-password-label">
                        Enter your old password:
                        </label>
                        <div className="edit-password-input-container">
                            <input
                            className="edit-password-input"
                            type={`${this.state.isOldPasswordShown ? "text" : "password"}`}
                            name="password"
                            placeholder="Enter your old password"
                            onChange={(e) => {
                                const body = {
                                    email: this.state.email,
                                    password: e.target.value
                                }
                                this.setState({
                                    oldPassword: e.target.value
                                })
                                this.checkPassword(body)
                            }}>
                            </input>
                            
                            <i
                            id="password-visibility-button"
                            value={this.state.isOldPasswordShown} 
                            onClick={() => {
                                this.setState({
                                    isOldPasswordShown: !this.state.isOldPasswordShown
                                })
                            }}>
                                {this.state.isOldPasswordShown === true ? 
                                    <span className="material-symbols-outlined">
                                        visibility
                                    </span>:
                                    <span className="material-symbols-outlined">
                                    visibility_off
                                    </span>
                                }
                                
                            </i>
                        </div>
                        {this.state.error ? <p className="errorMessage">{this.state.errorMessage}</p> : <p className="errorMessage">{this.state.errorMessage}</p>}
                        <label htmlFor="password" className="edit-password-label">
                        Enter your new password:
                        </label>
                        <div className="edit-password-input-container">
                            <input
                            className="edit-password-input"
                            type={`${this.state.isNewPasswordShown ? "text" : "password"}`}
                            name="password"
                            placeholder="Enter your new password"
                            onChange={(e) => {
                                this.setState({
                                    newPassword: e.target.value
                                })
                            }}>
                            </input>
                            
                            <i
                            id="password-visibility-button"
                            value={this.state.isNewPasswordShown} 
                            onClick={() => {
                                this.setState({
                                    isNewPasswordShown: !this.state.isNewPasswordShown
                                })
                            }}>
                                {this.state.isNewPasswordShown === true ? 
                                    <span className="material-symbols-outlined">
                                        visibility
                                    </span>:
                                    <span className="material-symbols-outlined">
                                    visibility_off
                                    </span>
                                }
                                
                            </i>
                        </div>
                        <p className="errorMessage"></p>
                        <label htmlFor="password" className="edit-password-label">
                        Confirm your new password:
                        </label>
                        <div className="edit-password-input-container">
                            <input
                            className="edit-password-input"
                            type={`${this.state.isConfirmPasswordShown ? "text" : "password"}`}
                            name="password"
                            placeholder="Confirm your new password"
                            onChange={(e) => {
                                this.setState({
                                    confirmPassword: e.target.value
                                })
                                this.confirmPassword(this.state.oldPassword, this.state.newPassword, e.target.value)
                            }}>
                            </input>
                            
                            <i
                            id="password-visibility-button"
                            value={this.state.isConfirmPasswordShown} 
                            onClick={() => {
                                this.setState({
                                    isConfirmPasswordShown: !this.state.isConfirmPasswordShown
                                })
                            }}>
                                {this.state.isConfirmPasswordShown === true ? 
                                    <span className="material-symbols-outlined">
                                        visibility
                                    </span>:
                                    <span className="material-symbols-outlined">
                                    visibility_off
                                    </span>
                                }
                                
                            </i>
                        </div>
                        {!this.state.isMatched ? <p className="errorMessage">{this.state.errorConfirmMessage}</p> : <p className="errorMessage"></p>}
                        
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={() => {
                            if(!this.state.error || this.state.isMatched){
                                const body= {password: this.state.confirmPassword}
                                this.updateProfile(body)
                                this.setState({
                                    showSuccessEditPassword: true,
                                    showEditPassword:false,
                                })
                            }
                        }}>
                            Change Password
                        </button>
                        <button className="modal-button-close" onClick={() => {
                            this.setState({
                                showEditPassword: false,
                            })
                        }}>
                            Cancel
                        </button>
                    </div>
                </Modal>
                <Modal show={this.state.showSuccessEditPassword} size="s" centered className="modal">
                    <Modal.Title className="modal-title">
                    Success!
                        </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        Your password has been updated!
                        </p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="modal-button-close" onClick={() => {
                            this.setState({
                                showSuccessEditPassword: false,
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

export default withNavigate(Profile)