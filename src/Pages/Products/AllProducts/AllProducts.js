import React from 'react';
import './AllProducts.css'
const AllProducts = (props) => {
    const {handleDelete , product} = props;
    const {img, name, supplier, price, quantity, description} = product;
    return (
        <div className='all-products'>
            <img src= {img} alt="" />
            <div className='features'>
            <h4>{name}</h4>
            <h5>Supplier: {supplier}</h5>
            <h5>Price: {price}</h5>
            <p>Quantity: {quantity}</p>
            <p>Description: {description} </p>
            <button className='update' onClick={() => handleDelete(product._id)}>delete</button>
            </div>
        </div>
    );
};

export default AllProducts;