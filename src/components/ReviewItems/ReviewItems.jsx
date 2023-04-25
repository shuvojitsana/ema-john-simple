import React from 'react';
import "./ReviewItems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({product, handleRemoveFromCart}) => {
    // console.log(product);
    return (
        <div className='review-item'>
            <img src={product.img} alt="" />
            <div className='review-details'>
                <p className='review-title'>{product.name}</p>
                <p>Price:<span className='review-color-name'>${product.price}</span></p>
                <p>Quantity:<span className='review-color-name'>${product.price}</span></p>

            </div>
            <button onClick={() =>handleRemoveFromCart(product.id)} className='review-btn'>
                <FontAwesomeIcon  className='btn-icon' icon={faTrashAlt } />
            </button>
        </div>
    );
};

export default ReviewItems;