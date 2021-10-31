import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://howling-wizard-23242.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const changeStatus = (id) => {
        fetch(`https://howling-wizard-23242.herokuapp.com/packages/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })

    }
    return (
        <div className='container'>
            <h1 className='title text-center'>Manage All Orders 📑</h1>
            {
                orders.map(order => <ul>
                    <li className='order-item'>
                        <p>Order By <span style={{ fontWeight: '800', fontSize: '40px' }}>{order.firstName}</span></p>
                        <p>{order.package} ---- <span style={{ color: 'red' }}>{order.status}</span></p>
                        <button onClick={() => changeStatus(order.status)} className='form-btn'>ACCEPT ✅</button>
                    </li>
                </ul>)
            }

        </div>
    );
};

export default ManageOrders;