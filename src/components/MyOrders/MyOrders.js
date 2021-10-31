import React, { useEffect, useState } from 'react';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://howling-wizard-23242.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are You Sure You Wanna Delete Your Order?');
        if (proceed) {
            const url = `https://howling-wizard-23242.herokuapp.com/packages/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    }
    return (
        <div className='container'>
            <h1 className='title text-center'>Order Lists 🚀</h1>
            <h4 style={{ fontFamily: 'Poppins' }} className='text-center'>You Have {orders.length} Orders Now.</h4>
            {
                orders.map(order => <ul>
                    <li className='order-item'>
                        <p>{order.package} ---- <span style={{ color: 'red' }}>{order.status}</span> <button onClick={() => handleDeleteOrder(order._id)} style={{ backgroundColor: 'white', color: 'red' }}>X</button> </p>
                    </li>
                </ul>)
            }

        </div>
    );
};

export default MyOrders;