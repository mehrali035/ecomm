import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'

const Cart = () => {
  const data = useContext(CartContext);
  console.log(data); 
  return (
  <>
   <div className="container">
    <div className="cart-container">
        <h2>Shopping cart</h2>
    </div>
   </div>
  </>
  )
}

export default Cart;
 