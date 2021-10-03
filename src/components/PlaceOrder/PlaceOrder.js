import React from 'react';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    return (
        <div>
            <h1>your order is being placed</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;