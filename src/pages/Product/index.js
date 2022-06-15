import React, { Component } from 'react'
import "./Product.css"
import withSearchParams from '../../helpers/withSearchParams';
import withNavigate from "../../helpers/withNavigate";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";
import {getProduct, getFavoriteProduct} from "../../components/Services/getProduct";
import SortForm from "./Sort-form";


export class Product extends Component {
    state = {
        pageTitle: "product",
        allProducts: [],
        favoriteProducts: [],
        totalPage: 1,
        page: 1,
        isLogin: false,
        menuClicked: "4",
        sort: "name",
        order: "asc"
    }

    getAllProductsPage = (category, sort, order, page) => {
        getProduct(category, sort, order, page)
        .then((res) => {
            this.setState({
                ...this.state.allProducts,
                allProducts: res.data.data,
                page: res.data.meta.page,
                totalPage: res.data.meta.totalPage
            });
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
    };
    getFavoriteProductsPage = () => {
        getFavoriteProduct()
        .then((res) => {
            this.setState({
                ...this.state.favoriteProducts,
                favoriteProducts: res.data.data,
                totalPage: res.data.meta.totalPage
            });
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
    };

    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        window.scrollTo(0, 0)
        const category = this.props.searchParams.get("category") || ""
        const sort = this.props.searchParams.get("sort") || "name"
        const order = this.props.searchParams.get("order") || "asc"
        const page = this.props.searchParams.get("page") || 1
        const checkSort = this.props.searchParams.get("sort")
        if(checkSort && checkSort !== "4"){
            
            if(category === ""){
                this.setState({
                    menuClicked: "0"
                });
            }
            if(category === "1"){
                this.setState({
                    menuClicked: "1"
                });
            }
            if(category === "2"){
                this.setState({
                    menuClicked: "2"
                });
            }
            if(category === "3"){
                this.setState({
                    menuClicked: "3"
                });
            }
            this.setState({
                category, sort, order, page: parseInt(page)
            })
            return this.getAllProductsPage(category, sort, order, page);
            
        }
        this.setState({
            category, sort, order, page: parseInt(page)
        })
        this.getFavoriteProductsPage()

    }

    componentDidUpdate(prevProps, prevState){
        const category = this.props.searchParams.get("category") || "";
        const sort = this.props.searchParams.get("sort") || "name";
        const order = this.props.searchParams.get("order") || "asc";
        const page = this.props.searchParams.get("page") || 1;
        if(prevProps !== this.props){
            if(sort !== "4"){
                this.setState({
                    category, sort, order, page: parseInt(page)
                })
                return this.getAllProductsPage(category, sort, order, page);
                
            }
            this.setState({
                category, sort, order, page: parseInt(page)
            })
            this.getFavoriteProductsPage()
        }
    }
    
    
  render() {
    const {allProducts, favoriteProducts} = this.state;
    const {setSearchParams, navigate} = this.props;
    return (
        <div className="background-white">
            <nav><Header isLogin={this.state.isLogin} pageTitle={this.state.pageTitle}/></nav>
            
            <main className="product-main">
                <section className="promo">Promo for you</section>
                <section className="menu-nav">

                    <div
                    className={`${this.state.menuClicked === "4" ? "menu-nav-clicked": "menu-nav-style"} `} 
                    onClick={() =>{
                        this.setState({
                            menuClicked: "4"
                        })
                        navigate("/product?&sort=4&order=asc&page=1")
                    }}>
                        Favorite Product
                    </div>

                    <div 
                    className={`${this.state.menuClicked === "0" ? "menu-nav-clicked": "menu-nav-style"} `} 
                    onClick={() =>{
                        this.setState({
                            menuClicked: "0"
                        })
                        setSearchParams({
                            category: "",
                            sort: "name",
                            order: "asc",
                            page: "1"
                        })
                    }}>
                        All
                    </div>

                    <div
                    className={`${this.state.menuClicked === "1" ? "menu-nav-clicked": "menu-nav-style"} `} 
                    onClick={() =>{
                        this.setState({
                            menuClicked: "1"
                        })
                        setSearchParams({
                            category: "1",
                            sort: "name",
                            order: "asc",
                            page: "1"
                        })
                    }}>
                        Coffee
                    </div>

                    <div
                    className={`${this.state.menuClicked === "2" ? "menu-nav-clicked": "menu-nav-style"} `} 
                    onClick={() =>{
                        this.setState({
                            menuClicked: "2"
                        })
                        setSearchParams({
                            category: "2",
                            sort: "name",
                            order: "asc",
                            page: "1"
                        })
                    }}>
                        Non Coffee
                    </div>

                    <div
                    className={`${this.state.menuClicked === "3" ? "menu-nav-clicked": "menu-nav-style"} `} 
                    onClick={() =>{
                        this.setState({
                            menuClicked: "3"
                        })
                        setSearchParams({
                            category: "3",
                            sort: "name",
                            order: "asc",
                            page: "1"
                        })
                    }}>
                        Food
                    </div>

                </section>

                <section className="aside-content">
                    <div className="info">Coupons will be updated every weeks. Check them out!</div>
                    <div className="box-promo">
                        <div className="box-3"></div>
                        <div className="box-2"></div>
                        <div className="box-1">
                            <div className="box-1-0">
                                <img className="image-promo" src={require("../../assets/food-1.png")} alt="Beef Spaghetti"/>
                            </div>
                            <div className="box-1-1">Beef Spaghetti<br/>20% OFF</div>
                            <div className="box-1-2">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</div>
                            <div className="box-1-3">COUPON CODE</div>
                            <div className="box-1-4">FNPR15RG</div>
                            <div className="box-1-5">Valid untill October 10th 2020</div></div>
                    </div>
                    <div className="apply-coupon"> Apply Coupon</div>
                    <div className="terms">
                        <div>Terms and Condition</div>
                        <div className="terms-content">
                        1. You can only apply 1 coupon per day<br/>
                        2. It only for dine in<br/>
                        3. Buy 1 get 1 only for new user<br/>
                        4. Should make member card to apply coupon</div>
                    </div>
                </section>

                <section className="product-main-content">
                    <div className="menu-container">
                        {this.state.menuClicked === "0"? 
                        <SortForm/> : <></>}
                        {this.state.menuClicked === "1"? 
                        <SortForm/> : <></>}
                        {this.state.menuClicked === "2"? 
                        <SortForm/> :<></>}
                        {this.state.menuClicked === "3"? 
                        <SortForm/> :<></>}
                        {this.state.menuClicked === "4"? 
                        <div className="product-sort"></div> :<></>}

                        <div className="menu-row">
                            {this.state.menuClicked === "4"
                                ? favoriteProducts.map((item) => {
                                    return (
                                    <CardProduct
                                        id={item.id}
                                        picture={item.picture}
                                        title={item.name}
                                        price={`IDR ${item.price}`}
                                    />
                                    );
                                }) : <></>
                            }
                            {this.state.menuClicked !== "4"
                                ? allProducts.map((item) => {
                                    return (
                                    <CardProduct
                                        id={item.id}
                                        picture={item.picture}
                                        title={item.name}
                                        price={`IDR ${item.price}`}
                                    />
                                    );
                                }) : <></>
                            }
                            
                        </div>
                    </div>
                    
                    {this.state.menuClicked !== "4" ?
                        <div className="pagination-container">
                            <div className="pagination">
                            {this.state.page > 2 ?
                            <div className="page-box"onClick={() => {
                                const page = this.state.page - 2;
                                setSearchParams({
                                    category: this.state.category,
                                    sort: this.state.sort,
                                    order: this.state.order,
                                    page: page
                                })
                            }}>{this.state.page - 2}</div>:
                            <div className="page-box-empty"></div>}

                            {this.state.page > 1 ?
                            <div className="page-box"onClick={() => {
                                const page = this.state.page - 1;
                                setSearchParams({
                                    category: this.state.category,
                                    sort: this.state.sort,
                                    order: this.state.order,
                                    page: page
                                })
                            }}>{this.state.page - 1}</div>:
                            <div className="page-box-empty"></div>}
                            
                            <div className="page-box-active">{this.state.page}</div>
                            
                            {this.state.page < this.state.totalPage ?
                            <div className="page-box"onClick={() => {
                                const page = this.state.page + 1;
                                setSearchParams({
                                    category: this.state.category,
                                    sort: this.state.sort,
                                    order: this.state.order,
                                    page: page
                                })
                            }}>{this.state.page + 1 }</div>:
                            <div className="page-box-empty"></div>}

                            {this.state.page < this.state.totalPage - 1 ?
                            <div className="page-box"onClick={() => {
                                const page = this.state.page + 2;
                                setSearchParams({
                                    category: this.state.category,
                                    sort: this.state.sort,
                                    order: this.state.order,
                                    page: page
                                })
                            }}>{this.state.page + 2}</div>:
                            <div className="page-box-empty"></div>}</div>


                            <div className="pagination">
                                {this.state.page !== 1 ? 
                                <div className="pagination-box previous-box" onClick={() => {
                                    const prev = this.state.page - 1;
                                    setSearchParams({
                                        category: this.state.category,
                                        sort: this.state.sort,
                                        order: this.state.order,
                                        page: prev
                                    })
                                }}>
                                    Previous
                                </div>:
                                <div className="pagination-box-empty">
                                    Previous
                                </div>
                                }
                                
                                <div className='pagination-box-info'>{this.state.page}/{this.state.totalPage}</div>

                                {this.state.page !== this.state.totalPage ? 
                                    <div className="pagination-box next-box" onClick={() => {
                                    const next = this.state.page + 1;
                                    setSearchParams({
                                        category: this.state.category,
                                        sort: this.state.sort,
                                        order: this.state.order,
                                        page: next
                                    })
                                    window.scrollTo(0,0)
                                }}>
                                    Next
                                </div>:
                                <div className="pagination-box-empty">
                                    Next
                                </div>
                                }
                            </div>
                        </div>:
                        <></>
                    }
                </section>
            </main>
            <Footer/>
        </div>
    )
  }
}

export default withSearchParams(withNavigate(Product))