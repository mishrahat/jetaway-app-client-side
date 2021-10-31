import React, { useEffect } from 'react';
import { useFieldArray, useForm } from "react-hook-form";


const Order = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://howling-wizard-23242.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thanks For Your Order!');
                    reset();
                }
            })
    };
    return (
        <div className='container'>
            <h1 className='title'>Book Now!</h1>
            <p style={{ fontFamily: 'Poppins' }}>Provide Your Details Below</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='form-input' htmlFor="">First Name</label>
                <input className='m-4' {...register("firstName", { required: true, maxLength: 20 })} required />
                <br />
                <label className='form-input' htmlFor="">Second Name</label>
                <input className='m-4' {...register("lastName")} required />
                <br />
                <label className='form-input' htmlFor="">Address</label>
                <input className='m-4' {...register("address")} required />
                <br />
                <label className='form-input' htmlFor="">Phone</label>
                <input className='m-4' type="number" {...register("phone")} required />
                <br />
                <label className='form-input' htmlFor="">Package</label>
                <input className='m-4' {...register("package")} required />
                <br />
                <br />
                <label className='form-input' htmlFor="">Order Status</label>
                <input style={{ color: 'grey', fontFamily: 'Poppins', fontWeight: '600' }} className='m-4' {...register("status")} type='text' value='PENDING' />
                <br />
                <input className='m-4' className='m-4 form-btn' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default Order;