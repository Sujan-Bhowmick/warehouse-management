import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import AllProducts from '../AllProducts/AllProducts';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure');
        if (proceed){
            const url = `http://localhost:5000/inventory/${id}` 
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div>
             <h2>Newest vehicles</h2>
            <div className='products'>
                {
                    products.map(product => <AllProducts
                        product={product}
                        key={product._id}
                        handleDelete = {handleDelete}
                    ></AllProducts>)
                }
            </div>
            <Link to = "/inventory">
            <button className='my-5 add-manage'>Add New Item</button>
            </Link>
           
        </div>
    );
};

export default Products;