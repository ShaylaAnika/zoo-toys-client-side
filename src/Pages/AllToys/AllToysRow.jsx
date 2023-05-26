import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toy , index}) => {
    const {sellerName ,productName, subCategory , price , quantity , _id} = toy;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{productName}</td>
            <td>{subCategory}</td>
            <td> ${price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toydetails/${_id}`} className='btn bg-rose-400 border-none hover:bg-rose-500'>Details</Link></td>
        </tr>
    );
};

export default AllToysRow;