import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
    const {serviceId} = useParams();
    const [products] = useProducts(serviceId)
    return (
        <div>
            <h3>Welcome to Details: {serviceId} </h3>
            <h5>Description: {products.name}</h5>
            <Link to= '/chekout'>
                <button className='my-5 btn btn-dark'>Proceed Checkout</button>
            </Link>
            <br />
            <button>deliver</button>

        <br />

            <Link to='/products'>
                <button className = 'my-5 btn btn-dark'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default ProductDetails;