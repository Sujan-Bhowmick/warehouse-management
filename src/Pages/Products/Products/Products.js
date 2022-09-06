import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import AllProducts from '../AllProducts/AllProducts';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
             <h2>Newest vehicles</h2>
            <div className='products'>
                {
                    products.map(product => <AllProducts
                        product={product}
                        key={product._id}
                    ></AllProducts>)
                }
            </div>
            <Link to = "/inventory">
            <button className='my-5'>Add New Item</button>
            </Link>
           
        </div>
    );
};

export default Products;