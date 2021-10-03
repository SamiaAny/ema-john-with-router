import React from 'react';

const ReviewItem = (props) => {
    const { key, name, price, quantity } = props.cart;
    const { handletoRemove } = props;
    return (
        <div className="product">
            <div>
            <h4 className="product-name">{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handletoRemove(key)} className="btn-regular">remove</button>
        </div>
        </div>
    );
};

export default ReviewItem;