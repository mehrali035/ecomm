import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='left'>
                    <li><a href="">Shopify</a><i class="fa-brands fa-shopify"></i></li>
                </ul>
                <ul className='right'>
                    <li><a href=""> <span className='shoppingCart'><i class="fa-solid fa-cart-plus"></i><span className='cartCount'>0</span></span></a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
