import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'

const UpdateUser = () => {
    const {id} = useParams();
    const [quantity, setQuantity] = useState({});
    useEffect( () => {
        const url = ``
        fetch(url)
    }, [])
    return (
        <div>
            <h3>Updating User: {id}cd</h3>
        </div>
    );
};

export default UpdateUser;