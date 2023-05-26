import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useTitle from '../hooks/useTitle';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    useTitle('allToys');

    const [toys, setToys] = useState([]);
    const [searchToys , setSearchToys] = useState('');
    useEffect(() => {
        fetch("https://assignment11-animal-toys-server-side.vercel.app/toys", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const sliceData = data.slice(0, 20);
                setToys(data);
            })
    }, [])


    const handleSearch = () => {
        fetch(`https://assignment11-animal-toys-server-side.vercel.app/toySearch/${searchToys}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setToys(data);
        })
    }

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h2 className='text-center my-10 text-5xl font-semibold text-rose-400'>All Animal Toys</h2>
            <div className="flex justify-center my-8">
                <input onChange={(e) => setSearchToys(e.target.value)} type="text" placeholder="Enter your text" className=" mr-4 p-2 border border-gray-300 rounded-l" />
                <button onClick={handleSearch} type="button" className="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-r">Submit</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full ">
                    <thead>
                        <tr className='text-center bg-rose-300'>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            toys.map((toy, index) => <AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;