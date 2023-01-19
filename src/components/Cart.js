import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'
// import CartReducer from '../Global/CartReducer';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  console.log(shoppingCart) 
  // stipe code start
  const handleToken = async (token) => {
    const product = { name: " All product", price: totalPrice }
    const response = await axios.post('http://localhost:8080/checkout', {
      product,
      token

    })
  }
   // stipe code end
  return (
    <>
      <div className="cart-container">
        <div className="cart-details">
          {shoppingCart.length > 0 ? shoppingCart.map(cart => (
            <div className="cart" key={cart.id}>
              <span className="cart-image"><img src={cart.image} alt="not found" /></span>
              <span className="cart-product-name">{cart.name}</span>
              <span className="cart-product-price">${cart.price}.00</span>
              <span className="inc" onClick={() => dispatch({ type: 'INC', id: Cart.id, cart: cart })}><i className="fas fa-plus"></i></span>
              <span className="product-quantity">{cart.qty}</span>
              <span className="dec" onClick={() => dispatch({ type: 'DEC', id: Cart.id, cart: cart })}><i className="fas fa-minus"></i></span>
              <span className="product-total-price">${cart.price * cart.qty}.00</span>
              <span className="delete-product" onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart: cart })}><i className="fas fa-trash-alt"></i></span>

            </div>
          ))
            : 'Sorry your cart is empty'}
        </div>
        {shoppingCart.length > 0 ? <div className="cart-summary">

          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="total-items">
              <div className="items">Total items</div>
              <div className="items-count">{qty}</div>
            </div>
            <div className="total-price-section">
              <div className="just-title">Total price</div>
              <div className="items-price">${totalPrice}.00</div>
            </div>

            <div className="stipe-section">
              <StripeCheckout
                stripeKey="pk_test_51MS1JxHyiwS0GVQPjjj6lfFgoC6kacc97anYH4c8kM6HOnodUPisI91GqaPIBMDG5ffexFVv9FyZz9QC096h16gB00EYm9v69V"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}  //multiply by 100 for getting correct amount
                name="All products"
              >

              </StripeCheckout>

            </div>
          </div>


        </div>
          : ''}
      </div>
    </>
  )
}

export default Cart;
