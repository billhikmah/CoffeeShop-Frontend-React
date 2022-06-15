import './Home.css';
import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
// import withParams from '../../helpers/withParams';
import withSearchParams from '../../helpers/withSearchParams';


export class Home extends Component {
    state = {
        isLogin: false,
        pageTitle: "home"
    };

    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        window.scrollTo(0, 0)
    }


    render() {
        return (
            <div className="home-background-white">
                <nav><Header isLogin={this.state.isLogin} pageTitle={this.state.pageTitle}/></nav>
                <section className="jumbotron">
                    <div className="jumbotron-hl font-rubik color-white">
                        Start Your Day with Coffee and Good Meals
                    </div>
                    <div className="jumbotron-desc font-rubik color-white">
                        We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
                    </div>
                    <div className="jumbotron-button font-rubik color-white">
                        Get Started
                    </div>
                </section>
                <section className="home-box-container">
                    <div className="box-left data">
                        <div>
                            <img src={require("../../assets/vektor/staff.png")} alt="staff-logo"/>
                        </div>
                        <div>
                            <p className="number color-black font-rubik">90+</p>
                            <p className="thing color-grey font-rubik">Staff</p>
                        </div>
                    </div>
                    <div className="box-mid data">
                        <div>
                            <img src={require("../../assets/vektor/store.png")} alt="store-logo"/>
                        </div>
                        <div>
                            <p className="number color-black font-rubik">30+</p>
                            <p className="thing color-grey font-rubik">Stores</p>
                        </div>
                    </div>
                    <div className="box-right data">
                        <div>
                            <img src={require("../../assets/vektor/customer.png")} alt="customer-logo"/>
                        </div>
                        <div>
                            <p className="number color-black font-rubik">800+</p>
                            <p className="thing color-grey font-rubik">Customers</p>
                        </div>
                    </div>
                </section>
                <section className="teamwork">
                    <div className="teamwork-left">
                        <img src={require("../../assets/Picture/Teamwork.png")} alt="teamwork" className="teamwork-pic"/>
                    </div>
                    <div className="teamwork-right">
                        <div className="teamwork-hl color-black font-rubik">
                            We Provide Good Coffee and Healthy Meals
                        </div>
                        <div className="teamwork-desc color-grey font-poppins">
                            You can explore the menu that we provide with fun and have their own taste and make your day better.
                        </div>
                        <div className="teamwork-desc color-grey font-poppins">
                            <img src={require("../../assets/vektor/Vector-check.png")} alt="Vector-check" className="vector-check"/>High quality beans
                        </div>
                        <div className="teamwork-desc color-grey font-poppins">
                            <img src={require("../../assets/vektor/Vector-check.png")} alt="Vector-check" className="vector-check"/>Healthy meals, you can request the ingredients
                        </div>
                        <div className="teamwork-desc color-grey font-poppins">
                            <img src={require("../../assets/vektor/Vector-check.png")} alt="Vector-check" className="vector-check"/>Chat with our staff to get better experience for ordering
                        </div>
                        <div className="teamwork-desc color-grey font-poppins">
                            <img src={require("../../assets/vektor/Vector-check.png")} alt="Vector-check" className="vector-check"/>Free member card with a minimum purchase of IDR 200.000.
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <p className="section-3-hl font-rubik color-black">
                        Here is People’s Favorite
                    </p>
                    <p className="section-3-desc font-poppins color-grey">
                        Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!
                    </p>
                </section>
                <section className="home-section-4">
                    <div className="home-section-4-box">
                        <div>
                            <img src={require("../../assets/food/image-22.png")} alt="food" className="home-section-4-pic"/>
                        </div>
                        <div className="home-section-4-name">
                            Hazelnut Latte
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>HazelnutSyrup
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Wanilla Whipped Cream
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Sliced Banana on Top
                        </div>
                        <div className="home-section-4-price">
                            IDR 25.000
                        </div>
                        <div className="home-section-4-button">
                            Select
                        </div>
                    </div>
                    <div className="home-section-4-box">
                        <div>
                            <img src={require("../../assets/food/image-27.png")} alt="food" className="home-section-4-pic"/>
                        </div>
                        <div className="home-section-4-name">
                            Pinky Promise
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>1 Shot of Coffee
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Vanilla Whipped Cream
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Chocolate Biscuits
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Strawberry Syrup
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Sliced strawberry on Top
                        </div>
                        <div className="home-section-4-price">
                            IDR 30.000
                        </div>
                        <div className="home-section-4-button">
                            Select
                        </div>
                    </div>
                    <div className="home-section-4-box">
                        <div>
                            <img src={require("../../assets/food/image-30.png")} alt="food" className="home-section-4-pic"/>
                        </div>
                        <div className="home-section-4-name">
                            Chicken Wings
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Wings
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Drum Sticks
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Mayonaise and Lemon
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Hot Fried
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png" )}alt="vector-check" className="vector-check"/>Secret Recipe
                        </div>
                        <div className="home-section-4-info">
                            <img src={require("../../assets/vektor/Vector-check-2.png")} alt="vector-check" className="vector-check"/>Buy 1 Get 1 only for Dine in
                        </div>
                        <div className="home-section-4-price">
                            IDR 40.000
                        </div>
                        <div className="home-section-4-button">
                            Select
                        </div>
                    </div>
                </section>

                <section className="section-5">
                    <p className="section-5-hl font-rubik color-black">
                        Visit Our Store in the Spot on the Map Below
                    </p>
                    <p className="section-5-desc font-poppins color-grey">
                        See our store in every city on the spot and spen your good day there. See you soon!
                    </p>
                    <img src={require("../../assets/Picture/Huge-Global.png")} alt="Huge Global"/>
                    <p className="section-5-hl font-rubik color-black">
                        Our Partner
                    </p>
                    <img src={require("../../assets/Picture/Sponsored.png")} alt="Sponsored"/>
                    <p className="section-5-hl font-rubik color-black">
                        Loved by Thousands of Happy Customer
                    </p>
                    <p className="section-5-desc font-poppins color-grey">
                        These are the stories of our customers who have visited us with great pleasure.
                    </p>
                    <div className="testimony">
                        <div className="testimony-box">
                            <div  className="testi-data">
                                <img src={require("../../assets/Profile/profile-1.png")} alt="profile-1" className="testi-pic"/>
                                <div className="testi-profile">
                                    <p className="testi-name color-black font-rubik">
                                        Viezh Robert
                                    </p>
                                    <p className="testi-location color-grey font-poppins">
                                        Warsaw, Poland
                                    </p>
                                </div>
                                <div className="testi-rate font-poppins color-black">
                                    4.5<img src={require("../../assets/vektor/Vector-star.png")} alt="star"/>
                                </div>
                            </div>
                            <div className="testi-words color-black font-poppins">
                                “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!
                            </div>
                        </div>
                        <div className="testimony-box">
                            <div  className="testi-data">
                                <img src={require("../../assets/Profile/profile-2.png")} alt="profile-1" className="testi-pic"/>
                                <div className="testi-profile">
                                    <p className="testi-name color-black font-rubik">
                                        Yessica Christy
                                    </p>
                                    <p className="testi-location color-grey font-poppins">
                                        Shanxi, China
                                    </p>
                                </div>
                                <div className="testi-rate font-poppins color-black">
                                    4.5<img src={require("../../assets/vektor/Vector-star.png")} alt="star"/>
                                </div>
                            </div>
                            <div className="testi-words color-black font-poppins">
                                “I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte
                            </div>
                        </div>
                        <div className="testimony-box">
                            <div  className="testi-data">
                                <img src={require("../../assets/Profile/profile-3.png")} alt="profile-1" className="testi-pic"/>
                                <div className="testi-profile">
                                    <p className="testi-name color-black font-rubik">
                                        Kim Young Jou
                                    </p>
                                    <p className="testi-location color-grey font-poppins">
                                        Seoul, South Korea
                                    </p>
                                </div>
                                <div className="testi-rate font-poppins color-black">
                                    4.5<img src={require("../../assets/vektor/Vector-star.png")} alt="star"/>
                                </div>
                            </div>
                            <div className="testi-words color-black font-poppins">
                                “This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-6">
                    <div className="section-6-left">
                        <div className="section-6-left-1">
                            Check our promo today!
                        </div>
                        <div className="section-6-left-2">
                            Let's see the deals and pick yours!
                        </div>
                    </div>
                    <div className="section-6-right">
                        See Promo
                    </div>
                </section>

                <Footer/>
            </div> 
        )
    }
}

export default withSearchParams(Home)