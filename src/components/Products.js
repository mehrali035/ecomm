import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import Banner from './Banner'; 

const Products = () => {
  const { Products } = useContext(ProductsContext);
  const {dispatch } = useContext(CartContext);
  return (
    <>
      <div className="container">
        <Banner />
        <div className="products">
          {Products.map((product) => (

            <div className="product" key={product.id}>

              <div className="product-image">
                <img src={product.image} alt="not found" />
              </div>
              <div className="product-details">
                <div className="product-name">
                  {product.name}
                </div>
                <div className="product-price">
                  ${product.price}.00
                </div>
              </div>
              <div className="add-to-cart" onClick={({type: 'ADD_TO_CART',id: product.id,product:product})}>Add-to-Cart</div>
              {product.status === 'Hot' ? <div className="hot">Hot</div> : ''}
              {product.status === 'New' ? <div className="new">New</div> : ''}

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
