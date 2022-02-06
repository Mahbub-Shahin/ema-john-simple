import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product)
    const {name, img, seller, price, stock} = props.product
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-content'>
                <h3>{name}</h3>
                <p>by: {seller}</p>
                <h3>{price}</h3>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faLuggageCart}/> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;