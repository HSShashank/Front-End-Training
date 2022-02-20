import React from 'react'

const Cart = (props) => {
    // console.log(props);
    const priceTotal = props.cartItems.reduce((a, c) => a + c['quantity'] * c['price'], 0);
  return (
    <>
    <div>
    {props.cartItems.length === 0 && <span style={{color: "red"}}>YOU CAN ADD ITEMS FROM THE LEFT. <br /> CURRENTLY, THE CART IS EMPTY</span> } 
    </div>
    <div className="list-group">
    {props.cartItems.map(item => {
      return (
        <>
       <ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill w-100 flex-grow-1 ">{item['name']}</li>
  <button class="list-group-item flex-fill bg-danger text-white" onClick={() => props.addToCart(item['id'])}>+</button>
  <button class="list-group-item flex-fill bg-warning text-black" onClick={() => props.removeItems(item['id'])}>-</button>
  <li class="list-group-item flex-fill">{item['quantity']} x ${item['price']}</li>
       </ul>
       <br />
        </>
      )
    })}
    </div>
    <hr />
    <div>
    {props.cartItems.length !== 0 && 
    <div>
      <ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill w-100 flex-grow-1 ">Items Price</li>
  <li class="list-group-item flex-fill">${priceTotal}</li>
       </ul>
   <ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill w-100 flex-grow-1 ">GST</li>
  <li class="list-group-item flex-fill">${priceTotal * 0.18}</li>
       </ul>
       <ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill w-100 flex-grow-1 ">Shipping Charges</li>
  <li class="list-group-item flex-fill">${priceTotal > 1000 ?  0 : 110}</li>
       </ul>
       <ul class="list-group list-group-horizontal">
  <li class="list-group-item flex-fill w-100 flex-grow-1 "> <strong>Grand Total</strong> </li>
  <li class="list-group-item flex-fill">${Math.round(priceTotal + (priceTotal * 0.18) + (priceTotal > 4000 ? 0 : 100))}</li>
       </ul>
       <hr />
       <button className="btn btn-primary">CHECKOUT</button>
    </div> } 
    </div>
    </>
  )
}

export default Cart