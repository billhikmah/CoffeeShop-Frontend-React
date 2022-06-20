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
            <div className="history-box">
                <div>
                    <img src={this.state.picture} alt="food-pic" className="history-pic"/>
                </div>
                <div className="history-details">
                    <div className="history-product-name">{this.state.name}</div>
                    <div className="history-product-details">
                        <div className="history-product-atribute">
                            <div className="history-product-price">{total_price}</div>
                            <div className="history-status">
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