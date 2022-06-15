import React, { Component } from 'react'
import withNavigate from "../../helpers/withNavigate";
import { getDetails } from "../Services/getProduct";

export class CardHistory extends Component {
    state = {
        picture: "",
        name: "",

    }
    getInfoProduct= (product_id) => {
        getDetails(product_id)
        .then((res) => {
            this.setState({
                name: res.data.data[0].name,
                picture: res.data.data[0].picture
            })
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
    }
    componentDidMount(){
        const { product_id } = this.props;
        this.getInfoProduct(product_id);
    }
    render(){
        const {total_price, delivery} = this.props;
        return (
            <div class="history-box">
                <div>
                    <img src={`https://starbills.herokuapp.com${this.state.picture}`} alt="food-pic" class="history-pic"/>
                </div>
                <div class="history-details">
                    <div class="history-product-name">{this.state.name}</div>
                    <div class="history-product-details">
                        <div class="history-product-atribute">
                            <div class="history-product-price">{total_price}</div>
                            <div class="history-status">
                                {delivery === 1 ? <p>Finished</p> : <></>}
                                {delivery === 2 ? <p>Delivered</p> : <></>}
                                {delivery === 3 ? <p>Picked Up</p> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withNavigate(CardHistory)