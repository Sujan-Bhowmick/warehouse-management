import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Add Inventory</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("descriptioin")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Image' type="img" {...register("img")} />
                {/* <input className='add-manage mx-auto w-50' type="submit" value= "Add Inventory"  /*/}
                <button className='add-manage mx-auto '>Add Inventory</button>
            </form>
        </div>
    );
};

export default AddInventory;