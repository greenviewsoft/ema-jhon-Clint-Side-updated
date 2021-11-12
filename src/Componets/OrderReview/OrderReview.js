import React from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] =  useCart(products);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }


    const handlePlaceOrder = () =>{
        // history.push('/PlaceOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div>
            <div className="shop-container" >
                <div className="product-container" >
                    {
                        cart.map(product=><ReviewItem 
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                            ></ReviewItem>)
                    }
                </div>
                <div className="cart-container" >
                    <div id="Mahabub-hasan" className="Mahyia-sultana" >
                        <h2>This Order Cart </h2>
                    </div>
                    <Cart cart={cart} >

                    </Cart>
                    <Link to="/PlaceOrder">
        <button onClick={handlePlaceOrder} className="purchase-btn">Place Order </button>
        </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;