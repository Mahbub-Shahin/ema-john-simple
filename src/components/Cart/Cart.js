import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    } else if(totalPrice > 15){
        shipping = 5.99;
    } else if(totalPrice > 0){
        shipping = 15.99;
    }

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(totalPrice)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + Vat: {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;