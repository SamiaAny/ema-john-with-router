import { useState,useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = products => {
    const [cart,setCart] = useState([]);
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        for(const key in savedCart) {
            if(products.length) {
                const addedProduct = products.find(pd => pd.key === key);
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);
    },[products]);
    return [cart,setCart];
}

export default useCart;