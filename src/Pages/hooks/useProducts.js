import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://warehouse-management-server-0tkh.onrender.com/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [products])
    return [products, setProducts];
}

export default useProducts;