import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    // creator is Mahabubshasan
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect( () =>  {
        console.log('prodct ApI called');
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, [])

    useEffect(() => {
        console.log('localStorage cart Called');
        if(products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
        for (const key in savedCart) {
            const addedProduct = products.find(product => product.key
            === key);

            storedCart.push(addedProduct);
        }
        setCart(storedCart);
        }
    }, [products])
    const handleAddToCart = (product) => {
       const exists = cart.find(pd => pd.key === product.key);
       let newCart = [];
       if (exists) {
           const rest = cart.filter(pd => pd.key !== product.key);
           exists.quantity = exists.quantity + 1;
           newCart = [...rest, product];
       } 
       else {
           product.quantity = 1;
           newCart = [...cart, product];
       }
       
       console.log(newCart);
       setCart(newCart);
       // save to local storage (for now)
       addToDb(product.key);
    }
    

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <div className="search-container" >
            <input 
            type="text" 
            onChange={handleSearch}
            placeholder="type here to search" />
        </div>
    <div className="shop-container" >
        <div className="product-container">
            {
                displayProducts.map(product => <Product
                    key={product.key}
                    product={product} 
                    handleAddToCart={handleAddToCart}
                    >
                     </Product>)
            }
        </div>
        <div className="cart-container">
        <h1>hello  Shop</h1>
           <Cart cart={cart}>
           
           </Cart>
           <Link to="/review">
        <button className="purchase-btn">Order Your Review</button>
        </Link>
        </div>
    </div>
    <h2 className="fotter-clr">© copyright 2021 www.Giftcards.com.bd . Developed By GreenViewSoft</h2>
        </>
    );
};

export default Shop;