import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, star } = props.product;
   

    return (
        <div className="product" >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name" > {name} </h4>
                <p><small>By: {seller} </small></p>
                <p>price: {price} </p>
                <p><small>only {stock} left in stock - order soon</small></p>

                <Rating   
                 initialRating={star}
                emptySymbol="fa fa-star-o fa-2x icon-g"
                fullSymbol="fa fa-star fa-2x icon-g"
                readonly></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)} 
                className="purchase-btn"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>
            </div>
        </div>
    );
};

export default Product;