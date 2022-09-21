import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../../Products/Product/Product';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <Banner></Banner>
            <h3 className='my-5'>Search Your Best Cars</h3>
            <div className='products'>
                {
                    products.slice(0, 6).map(product => <Product
                        product={product}
                        key={product._id}
                    ></Product>)
                }
            </div>
            <Link to='/products'>
                <button className = 'my-5 add-manage'>Manage Inventories</button>
            </Link>
            <Footer></Footer>
        </div>
    );
};

export default Home;