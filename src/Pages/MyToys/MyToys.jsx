import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../hooks/useTitle';
import MyToysRow from './myToysRow';

const MyToys = () => {
    useTitle('myToys')
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const [myToys, setMytoys] = useState([]);
    const [activeBtn, setActiveBtn] = useState('')
    useEffect(() => {
        fetch(`https://assignment11-animal-toys-server-side.vercel.app/toys-email/${user.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMytoys(data);
            })
    }, [])

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment11-animal-toys-server-side.vercel.app/toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMytoys(remaining);
                        }
                    })

            }
        })


    }


    const handleActiveBtn = (name) => {
        setActiveBtn(name);
    };

    

    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-20'>
                <div className='flex justify-end gap-4 my-8'>

                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Sort by Price</option>
                        <option onClick={() => handleActiveBtn('high')}>High to low</option>
                        <option onClick={() => handleActiveBtn('low')}>Low to High</option>

                    </select>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                myToys.map((toy, index) => <MyToysRow key={toy._id} toy={toy} index={index} handleDelete={handleDelete}></MyToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;