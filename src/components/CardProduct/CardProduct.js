import React from 'react'
import './CardProduct.css';
import withNavigate from "../../helpers/withNavigate";

function CardProduct(props) {
  
  
  const { id, picture, title, price, role } = props;
  return (
    <div>
      <div className="white-box" 
      onClick={()=>{
          props.navigate(`/product/details/${id}`)
      }}>
          <div className="image-container">
              <img className="image-2" src={picture} alt="Veggie tomato mix"/>
          </div>
          <div className="product-name">{title}</div>
          <div className="price">{price}</div>
      </div>
      {role === "admin" ?
      <div onClick={() =>{
        props.navigate("/product/new")
      }}>
        <img src={require("../../assets/vektor/edit-product.png")} className="edit-product-logo" alt="edit-product-logo"/>
      </div>:
      <></>}
    </div>
  )
}

export default withNavigate(CardProduct)