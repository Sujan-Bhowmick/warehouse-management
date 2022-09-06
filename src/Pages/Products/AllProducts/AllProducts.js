import React from 'react';
import './AllProducts.css'
const AllProducts = (props) => {
    const {img, name, supplier, price, quantity,} = props.product
    return (
        <div className='all-products'>
            <img src= {img} alt="" />
            <div className='features'>
            <h4>{name}</h4>
            <h5>Supplier: {supplier}</h5>
            <h5>Price: {price}</h5>
            <p>Quantity: {quantity}</p>
             <input type="submit" value="Delete" />
            </div>
        </div>
    );
};

export default AllProducts;