import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import UpdateToy from '../UpdateToy/UpdateToy';

const MyToysRow = ({ toy, index, handleDelete }) => {
    const { _id, sellerName, productName, subCategory, price, quantity } = toy;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{productName}</td>
            <td>{subCategory}</td>
            <td> ${price}</td>
            <td>{quantity}</td>
            <td><Link to={`/updatetoy/${_id}`} className='btn bg-rose-400 border-none hover:bg-rose-500'>Update</Link></td>
            <td><AiFillDelete onClick={() => handleDelete(_id)} className='text-3xl text-rose-700'></AiFillDelete></td>
        </tr>
    );
};

export default MyToysRow;