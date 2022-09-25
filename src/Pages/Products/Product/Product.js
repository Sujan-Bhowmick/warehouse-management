import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, img, name, supplier, price, quantity, description } = props.product;
    const navigate = useNavigate()
    const navigateToProductDetail = id => {
        // navigate('/product')
        navigate(`/product/${id}`)

    }
    return (
        <div className='all-products-home'>
            <img className='img-fluid' src={img} alt="" />
            <div className='features-home'>
                <h6>{name}</h6>
                <h6>Supplier: {supplier}</h6>
                <p className='my-1'>Price: $ {price}</p>
                <small ><p className='my-1'>Quantity: {quantity}</p></small>
                <p>Description: {description.slice(0, 15)}</p>
                <button onClick={() => navigateToProductDetail(_id)} className='update '>Update</button>
            </div>
        </div>
    );
};

export default Product;
