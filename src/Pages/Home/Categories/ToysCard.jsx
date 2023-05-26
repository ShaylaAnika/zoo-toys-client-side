import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({toy}) => {
    const {_id , price ,picture , rating , productName
    } = toy;
    return (
        <div data-aos="zoom-out-up" className="card w-96 bg-base-100 shadow-xl shadow-rose-200">
            <figure><img className='h-[250px]' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className='text-lg'>Price: ${price}</p>
                <p className='text-lg'>Rating: {rating}</p>
                <div className="card-actions justify-start mt-3">
                    <Link to={`/toydetails/${_id}`} className="btn bg-rose-400 border-none hover:bg-rose-500">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;