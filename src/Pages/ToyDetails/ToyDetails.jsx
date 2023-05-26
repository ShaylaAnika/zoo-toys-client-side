import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ToyDetails = () => {
    useTitle('toyDetails')
    const toy = useLoaderData();
    console.log(toy);
    const {details , picture , price , productName , quantity, rating , subCategory , sellerName  , sellerEmail} = toy


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl shadow-rose-200" />
                    <div>
                        <h1 className="text-5xl font-bold">{productName}</h1>
                        <p className="text-xl mt-6">Sub-Category: <span className='text-gray-500'>{subCategory}</span></p>
                       
                        <p className="text-xl mt-3">Quantity: <span className='text-gray-500'>{quantity}</span></p>
                       
                        <p className="text-xl mt-3">Details: <span className='text-gray-500'>{details}</span></p>

                        <p className="text-xl mt-3">Price: <span className='text-gray-500'>${price}</span></p>

                        <p className="text-xl mt-3">Rating: <span className='text-gray-500'>{rating}</span></p>

                        <div className='flex border-2 border-rose-300 rounded-xl mt-6 py-4 px-6 gap-10 justify-start items-center'>
                        <p className="text-xl mt-3">Seller Name: <span className='text-gray-500'>{sellerName}</span></p>
                        <p className="text-xl mt-3">Seller Email: <span className='text-gray-500'>{sellerEmail}</span></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;