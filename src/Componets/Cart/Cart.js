import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const { cart } = props;
    console.log(cart)
    console.log(props.children)
    let total = 0;
    let totalQuantity =0;
    for (const product of cart) {
        if(!product.quantity) {
product.totalQuantity=1
        }
        totalQuantity=totalQuantity+product.quantity
        total = total + product.price*product.quantity;
    
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="bg" >
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity} </h5>
            <br />

            <p>Total: {total.toFixed(1)}</p>
            <p>shipping: {shipping}</p>
            <p>tax: {tax.toFixed(1)}</p>
            <p>Grand Total: {grandTotal.toFixed(1)}</p>

        </div>
    );
};

export default Cart;