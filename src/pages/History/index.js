import React, { Component } from 'react'
import "./History.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import getHistory from "../../components/Services/getHistory";
import CardHistory from '../../components/CardHistory/CardHistory';
// import axios from 'axios';

export class History extends Component {
    state = {
        pageTitle: "history",
        isLogin: false,
        myHistory: []
    }
    getMyHistory = () => {
        getHistory()
        .then((res) => {
            this.setState({
                ...this.state.myHistory,
                myHistory: res.data.data,
                page: res.data.meta.page,
                totalPage: res.data.meta.totalPage
            })
        })
        .catch((err) => {
            console.log("Error: ", err);
        });

    }
    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                isLogin: true
            })
        }
        this.getMyHistory()
        window.scrollTo(0, 0)
    }
    render() {
        return (<div >
            <Header isLogin={this.state.isLogin} pageTitle={this.state.pageTitle}/>
            <main className="history-main">
                <div className="history-title-section">
                    <div className="history-page-title">Let’s see what you have bought!</div>
                    <div className="history-page-sub-title">Long press to delete item</div>  
                </div>    
                <div className="history-container">

                    {this.state.myHistory.map((item) => {
                        return (
                        <CardHistory
                            product_id={item.product_id}
                            total_price={`IDR ${item.total_price}`}
                            delivery={item.delivery_method_id}
                            id={item.id}
                        />
                        );
                    })}

                </div>
            </main>
            <Footer/>
        </div> 
        )
    }
}

export default History