import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import "./Orders.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
const savedCart = useLoaderData();
const [cart, setCart] = useState(savedCart);


// console.log(savedCart);

const handleRemoveFromCart = (id) =>{
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining);
    removeFromDb(id);
}

    const  handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-cart'>
                {
                    cart.map(product => <ReviewItems
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart

                 cart={cart}
                 handleClearCart={ handleClearCart}
                >
                    <Link className='proceed-link' to="/proceedChaker">
                        <button className='btn-proceed'>
                            Proceed cheker
                            <FontAwesomeIcon  icon={faTrashAlt } />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;