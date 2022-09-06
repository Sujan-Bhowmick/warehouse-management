import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h3>Welcome to Details: {serviceId} </h3>
            <Link to= '/chekout'>
                <button className='my-5 btn btn-dark'>Proceed Checkout</button>
            </Link>

        <br />

            <Link to='/products'>
                <button className = 'my-5 btn btn-dark'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default ProductDetails;