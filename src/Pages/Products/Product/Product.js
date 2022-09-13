import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {_id, img, name, supplier, price, quantity, description} = props.product;
    const navigate = useNavigate()
    const navigateToProductDetail = id => {
        // navigate('/product')
        navigate(`/product/${id}`)

    }
    return (
        <div className='all-products'>
             <img src= {img} alt="" />
            <h4>{name}</h4>
            <h5>Supplier: {supplier}</h5>
            <h5>Price: {price}</h5>
            <p>Quantity: {quantity}</p>
            <p>Description: {description.slice(0 , 15)}</p>
            <button onClick={() => navigateToProductDetail(_id)} className = 'btn btn-dark'>Update</button>
        </div>
    );
};

export default Product;