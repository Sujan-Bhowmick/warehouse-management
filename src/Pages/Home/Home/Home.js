import React from 'react';
import { Link } from 'react-router-dom';

import useProducts from '../../hooks/useProducts';
import Product from '../../Products/Product/Product';

import Banner from '../Banner/Banner';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <Banner></Banner>
            <h3 className='my-5'>Search Your Best Cars</h3>
            <div className='products'>
                {
                    products.slice(0, 3).map(product => <Product
                        product={product}
                        key={product._id}
                    ></Product>)
                }
            </div>
            <Link to='/products'>
                <button className = 'my-5 btn btn-dark'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default Home;