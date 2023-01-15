import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='left'>
                    <li><Link to="/">Shopify</Link><i class="fa-brands fa-shopify"></i></li>
                </ul>
                <ul className='right'>
                    <li><Link to="/cart"> <span className='shoppingCart'><i class="fa-solid fa-cart-plus"></i><span className='cartCount'>0</span></span></Link></li>
                </ul>
            </nav>
        </>
    )
}
  
export default Navbar
