import React from 'react';
import './AllProducts.css'
const AllProducts = (props) => {
    const {handleDelete , product} = props;
    const {img, name, supplier, price, quantity, description} = product;
    return (
        <div className='all-products'>
            <img className='img-fluid' src= {img} alt="" />
            <div className='features'>
            <h6 className='my-2'>{name}</h6>
            <h6>Supplier: {supplier}</h6>
            <p>Price: {price}</p>
            <small> <p>Quantity: {quantity}</p></small>
            {/* <p>Description: {description} </p> */}
            <button className='update' onClick={() => handleDelete(product._id)}>delete</button>
            </div>
        </div>
    );
};

export default AllProducts;