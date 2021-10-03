import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
// import { useEffect } from 'react';
// import { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    let history = useHistory();
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    // const [products,setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('./products.JSON')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // },[]);

    //handle to remove from cart
    const handletoRemove = key => {
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    //handle to place order
    const handleOrder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(cart => <ReviewItem
                        cart={cart}
                        handletoRemove={handletoRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleOrder} className="btn-regular">place order</button>
                </Cart>
            </div>
           
        </div>
    );
};

export default OrderReview;