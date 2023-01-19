
import React, { createContext, useState } from 'react';
import hphone from "../assests/hphone.jpg";
import iphone from "../assests/iphone.jpg"
import jacket from "../assests/jacket.jpg"
import laptop from "../assests/laptop.jpg"
import lshoe from "../assests/lshoe.jpg"
import mshoe from "../assests/mshoe.jpg"
import pods from "../assests/pods.jpg"
import t from "../assests/t.jpg"
import jeans from "../assests/jeans.jpg"
import perfume from "../assests/perfume.jpg"
import rings from "../assests/rings.jpg"
import lipstick from "../assests/lipstick.jpg"


export const ProductsContext = createContext();


const ProductsContextProvider = (props) => {
  const [Products] = useState([
    { id: 1, name: 'Head phone', price: 200, image: hphone, status: 'New' },
    { id: 2, name: 'I-phone', price: 1500, image: iphone, status: 'Hot' },
    { id: 3, name: 'Jacket', price: 300, image: jacket, status: 'Hot' },
    { id: 4, name: 'laptop', price: 2000, image: laptop, status: 'New' },
    { id: 5, name: 'ladies shoe', price: 700, image: lshoe, status: 'Hot' },
    { id: 6, name: 'Mens shoe', price: 400, image: mshoe, status: 'Hot' },
    { id: 7, name: 'Air-pods', price: 250, image: pods, status: 'Hot' },
    { id: 8, name: 'T-shirt', price: 50, image: t, status: 'New' },
    { id: 9, name: 'Jeans', price: 100, image: jeans, status: 'New' },
    { id: 10, name: 'Perfumes', price: 150, image: perfume, status: 'Hot' },
    { id: 11, name: 'Rings', price: 350, image: rings, status: 'New' },
    { id: 12, name: 'Lipstick', price: 30, image: lipstick, status: 'Hot' },

  ])
  return (
    <>
      <ProductsContext.Provider value={{ Products:[...Products] }}>
        {props.children} 

      </ProductsContext.Provider>

    </>
  )
}

export default ProductsContextProvider
// export {ProductsContext};