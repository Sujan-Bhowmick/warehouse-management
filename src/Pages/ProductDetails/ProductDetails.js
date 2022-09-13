import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const [count, setCount] = useState(5);
    const deliver = () => {
        const newCount = count + 1;
        setCount(newCount);
    }


    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            
           <div  className= 'details'>
          
           <div className='product-details'>
                <h3>Welcome to car details : {productId} </h3>
                <img src={product.img} alt="" />
                <h5>Name: {product.name}</h5>
                <h6>Price: {product.price}</h6>
                <h6>Quantity: {product.quantity}</h6>cd 
                <p>Description: {product.description}</p>
            </div>
            <div className='quantity-manage'>
            <h3 className='my-5'>Quantity </h3>
                <h5 className='my-5'>Quantity : {count}</h5>
            </div>
           </div>
            {/* <Link to= '/chekout'>
                <button className='my-5 btn btn-dark'>Proceed Checkout</button>
            </Link> */}
            <br />
            <button onClick={deliver} className='btn btn-dark'>deliver</button>

            <br />

            <Link to='/products'>
                <button className='my-5 btn btn-dark'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default ProductDetails;