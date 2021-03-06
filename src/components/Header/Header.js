import React, { Component } from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import withNavigate from "../../helpers/withNavigate";
import getUser from "../../components/Services/getUserInfo";


export class Header extends Component  {
  constructor (props) {
    super(props);
    this.state = {
      keyword: "",
      profilePicture: "",
      pageTitle: "",
    }
    this.searchFormSubmit = this.searchFormSubmit.bind(this);
    this.searchFormChange = this.searchFormChange.bind(this);
  }
  searchFormSubmit(event){
    event.preventDefault();
    this.props.navigate(`/search?keyword=${this.state.keyword}&category=&sort=name&order=asc&page=1`)
  }
  searchFormChange(event){
    this.setState({
      keyword: event.target.value
    })
  }
  getProfile = () => {
    getUser()
    .then((result) => {
      this.setState({
        profilePicture: result.data.data.picture,
      })
    })
    .catch((error) => {
        console.log(error.response) })
}
  componentDidMount(){
    const pageTitle = this.props.pageTitle
    this.setState({
      pageTitle: pageTitle
    })
    this.getProfile()
  }
  render() {
    return (
      <nav className="header-navigation">
      <div className="navigation-1">
          <div className="navigation-1-content">
              <img src={require("../../assets/stock1.png")} alt="logo" className="image-3"/>
              <div className="title-1">Coffee Shop</div>    
          </div></div>
      <div className="navigation-2">
          <Link to="/"
          className={`${this.state.pageTitle === "home" ? "navigation-2-content-clicked" : "navigation-2-content"}`}
          >
            Home
          </Link>
          <Link to="/product"
          className={`${this.state.pageTitle === "product" ? "navigation-2-content-clicked" : "navigation-2-content"}`}
          >
            Product
          </Link>
          <Link to="/payment"
          className={`${this.state.pageTitle === "payment" ? "navigation-2-content-clicked" : "navigation-2-content"}`}
          >
            Your Cart
          </Link>
          <Link to="/history"
          className={`${this.state.pageTitle === "history" ? "navigation-2-content-clicked" : "navigation-2-content"}`}
          >
            History
          </Link>
      </div>
      `{this.props.isLogin === true ?
      <div className="header-login-navigation-3 ">
        <div className="search-bar-container">
          <img src={require("../../assets/search.png")} className="search-bar-logo" alt="sear bar logo"/>
          <form onSubmit={this.searchFormSubmit}>
            <input type="text" className="search-bar" placeholder="Search" value={this.state.keyword}
            onChange={this.searchFormChange}/>
          </form>

        </div>
        <img className="header-login-navigation-3-content" src={require("../../assets/chat.png")} alt="Chat"/>
        <Link to="/profile"><img className="header-login-navigation-3-content header-login-image-1" src={this.state.profilePicture} alt="Profile"/></Link>
      </div> : 
      <div className="navigation-3">
          <Link to="/login" className="login-button navigation-3-content">Login</Link>
          <Link to="/auth" className="signup-button navigation-3-content">Sign Up</Link>
      </div>}`
      
    </nav>
    )
  }
}

export default withNavigate(Header)