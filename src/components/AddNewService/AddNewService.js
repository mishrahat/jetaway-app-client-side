import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://howling-wizard-23242.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Package Added!');
                    reset();
                }
            })
    };
    return (
        <div>
            <h1 className='title text-center'>Add New Service</h1>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <label style={{ marginRight: '20px', marginTop: '20px', fontFamily: 'Poppins' }} htmlFor="">Package Name: </label>
                <input {...register("name")} />
                <br />
                <label style={{ marginRight: '20px', marginTop: '20px', fontFamily: 'Poppins' }} htmlFor="">Package Description: </label>
                <textarea {...register("description")} />
                <br />
                <label style={{ marginRight: '20px', marginTop: '20px', fontFamily: 'Poppins' }} htmlFor="">Package Image Url: </label>
                <input type='text' {...register("img")} />
                <br />
                <label style={{ marginRight: '20px', marginTop: '20px', fontFamily: 'Poppins' }} htmlFor="">Package Price: </label>
                <input type="number" {...register("price")} />
                <br />
                <input className='mt-3 form-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;