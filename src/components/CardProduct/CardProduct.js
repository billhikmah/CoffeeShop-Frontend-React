import React from 'react'
import './CardProduct.css';
import withNavigate from "../../helpers/withNavigate";

function CardProduct(props) {
  
  
  const { id, picture, title, price } = props;
  return (
    <div className="white-box" 
    onClick={()=>{
        props.navigate(`/product/details/${id}`)
    }}>
        <div className="image-container">
            <img className="image-2" src={`http://localhost:8080${picture}`} alt="Veggie tomato mix"/>
        </div>
        <div className="product-name">{title}</div>
        <div className="price">{price}</div>
    </div>
  )
}

export default withNavigate(CardProduct)