import React from 'react'
import './Product.css';

const Product = (props) => {
  return (
    <>
<div className="card" >
  <img src={props.data['url']} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.data['name']}</h5>
    <p className="card-text">${props.data['price']}</p>
    <button type="button" className="btn btn-warning" onClick={ () => props.addToCart(props.data['id'])}>Add to Cart</button>
  </div>
</div>
    </>
  )
}
export default Product
