import React from 'react';
import useProducts from '../hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed){
            const url = `https://warehouse-management-server-0tkh.onrender.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div>
            <h2>Manage Your services</h2>
            {
                products.map(product => <div key={product._id}>
                    <h4>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageInventory;