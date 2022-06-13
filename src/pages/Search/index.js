import React, { Component } from 'react'
import "./search.css"
import { Link } from "react-router-dom";
import axios from 'axios';

// import withParams from "../../helpers/withParams";
import withSearchParams from '../../helpers/withSearchParams';
import withNavigate from "../../helpers/withNavigate";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct/CardProduct";
import SortForm from "./Sort-form";
import SortCategory from "./Sort-category";

import {getSearchProduct, getFavoriteProduct} from "../../components/Services/getProduct";

export class Search extends Component {
    state = {
        searchProducts: [],
        totalPage: 1,
        page: 1,
        isLogin: false,
    }
    
    getSearchProductsPage = (category, sort, order, page, keyword) => {
        getSearchProduct(category, sort, order, page, keyword)
        .then((res) => {
            this.setState({
                ...this.state.searchProducts,
                searchProducts: res.data.data,
                totalPage: res.data.meta.totalPage,
                page: res.data.meta.page
            });
        })
        .catch((err) => {
            console.log("Error", err);
            this.setState({
                ...this.state.searchProducts,
                searchProducts: [],
                totalPage: [],
                page: []
            });
        });
    };

    componentDidMount(){
        
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        const page = this.props.searchParams.get("page") || 1;
        const keyword = this.props.searchParams.get("keyword") || 1;
        const sort = this.props.searchParams.get("sort") || "name";
        const order = this.props.searchParams.get("order") || "asc";
        const category = this.props.searchParams.get("category") || "";
        this.getSearchProductsPage(category, sort, order, page, keyword);

    }

    componentDidUpdate(prevProps, prevState){
        const page = this.props.searchParams.get("page") || 1;
        const keyword = this.props.searchParams.get("keyword") || 1;
        const sort = this.props.searchParams.get("sort") || "name";
        const order = this.props.searchParams.get("order") || "asc";
        const category = this.props.searchParams.get("category") || "";
        if(prevProps !== this.props){
            this.getSearchProductsPage(category, sort, order, page, keyword);
        }
    }
    
    
  render() {
      const {allProducts, favoriteProducts, coffeeProducts, nonCoffeeProducts, foodProducts} = this.state;
      const {navigate, searchParams, setSearchParams} = this.props;
      
    return (
        <div className="background-white">
            <nav><Header isLogin={this.state.isLogin}/></nav>
            <section className="search-main-container">
                {this.state.searchProducts.length !== 0 ?
                <div className="search-main">
                    <SortForm/>
                    <SortCategory/>
                    <div className="search-container">
                        {this.state.searchProducts.map((item) => {
                            return (
                            <CardProduct
                                id={item.id}
                                picture={item.picture}
                                title={item.name}
                                price={`IDR ${item.price}`}
                                key={item.id}
                            />);
                        })}
                    </div>
                    <div className="pagination-container">
                        <div className="pagination">
                        {this.state.page > 2 ?
                        <div className="page-box"onClick={() => {
                            const page = this.state.page - 2;
                            const category = searchParams.get("category");
                            const sort = searchParams.get("sort");
                            const order = searchParams.get("order");
                            const keyword = searchParams.get("keyword");
                            navigate(`/search?keyword=${keyword}&category=${category}&sort=${sort}&order=${order}&page=${page}`)
                        }}>{this.state.page - 2}</div>:
                        <div className="page-box-empty"></div>}

                        {this.state.page > 1 ?
                        <div className="page-box"onClick={() => {
                            const page = this.state.page - 1;
                            const category = searchParams.get("category");
                            const sort = searchParams.get("sort");
                            const order = searchParams.get("order");
                            const keyword = searchParams.get("keyword");
                            navigate(`/search?keyword=${keyword}&category=${category}&sort=${sort}&order=${order}&page=${page}`)
                        }}>{this.state.page - 1}</div>:
                        <div className="page-box-empty"></div>}
                        
                        <div className="page-box-active">{this.state.page}</div>
                        
                        {this.state.page < this.state.totalPage ?
                        <div className="page-box"onClick={() => {
                            const page = this.state.page + 1;
                            const category = searchParams.get("category");
                            const sort = searchParams.get("sort");
                            const order = searchParams.get("order");
                            const keyword = searchParams.get("keyword");
                            navigate(`/search?keyword=${keyword}&category=${category}&sort=${sort}&order=${order}&page=${page}`)
                        }}>{this.state.page + 1 }</div>:
                        <div className="page-box-empty"></div>}

                        {this.state.page < this.state.totalPage - 1 ?
                        <div className="page-box"onClick={() => {
                            const page = this.state.page + 2;
                            const category = searchParams.get("category");
                            const sort = searchParams.get("sort");
                            const order = searchParams.get("order");
                            const keyword = searchParams.get("keyword");
                            navigate(`/search?keyword=${keyword}&category=${category}&sort=${sort}&order=${order}&page=${page}`)
                        }}>{this.state.page + 2}</div>:
                        <div className="page-box-empty"></div>}</div>


                        <div className="pagination">
                            {this.state.page !== 1 ? 
                            <div className="pagination-box previous-box" onClick={() => {
                                const prev = Number(searchParams.get("page")) - 1;
                                const category = searchParams.get("category");
                                const sort = searchParams.get("sort");
                                const order = searchParams.get("order");
                                const keyword = searchParams.get("keyword");
                                navigate(`/search?keyword=${keyword}&category=${category}&sort=${sort}&order=${order}&page=${prev}`)
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
                                const next = Number(searchParams.get("page")) + 1;
                                const category = searchParams.get("category");
                                const sort = searchParams.get("sort");
                                const order = searchParams.get("order");
                                const keyword = searchParams.get("keyword");
                                navigate(`/search?keyword=${keyword}&category=${category}&sort=${sort}&order=${order}&page=${next}`)
                            }}>
                                Next
                            </div>:
                            <div className="pagination-box-empty">
                                Next
                            </div>
                            }
                        </div>
                    </div>
                </div>:
                <div>
                    <p className='product-search-empty'>
                        <span className="material-symbols-outlined ">
                            find_in_page
                        </span>
                    </p>
                    <p className="product-search-empty">Product Not Found</p>
                    <p className="product-search-empty-suggest">Try different or more general keywords</p>
                </div>
                }
            </section>
            <Footer/>
        </div>
    )
  }
}

export default withSearchParams(withNavigate(Search))