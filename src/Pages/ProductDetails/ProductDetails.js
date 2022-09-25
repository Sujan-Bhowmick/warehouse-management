import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './ProductDetails.css'

const ProductDetails = () => {

    const { productId, id } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `http://localhost:5000/inventory/${productId}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result)
    //     })
    // }

    return (
        <div>
            <div className='details'>

                <div className='product-details'>
                    <h3>Welcome to car details : {productId} </h3>
                    <div className='image'>
                        <img src={product.img} alt="" />
                    </div>
                    <div className='features-details'>
                        <h5>Name: {product.name}</h5>
                        <h6>Price: {product.price}</h6>
                        <h6>Quantity: {product.quantity} </h6>
                        <p>Description: {product.description}</p>
                    </div>

                </div>
                <div className='quantity-manage'>
                    <h3 className='my-5'>Quantity </h3>
                    {/* <form onSubmit={handleSubmit(onSubmit)}  >
            <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
            <input className='btn btn-dark w-50 mx-auto' type="submit" value= "Add Quantity"  />
            </form> */}

                </div>
            </div>
            {/* <Link to= '/chekout'>
                <button className='my-5 btn btn-dark'>Proceed Checkout</button>
            </Link> */}
            <br />
            <button className='btn btn-dark'>deliver</button>

            <br />

            <Link to='/products'>
                <button className='my-5 btn btn-dark'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default ProductDetails;