import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';


const UpdateToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    
    const {_id ,price, productName ,subCategory , rating ,picture , details , quantity} = toy;
    const {user} = useContext(AuthContext);

    const handleUpdate = event => {

        event.preventDefault();
        const form = event.target;
            const sellerName = form.seller_name.value;
            const sellerEmail = form.seller_email.value;
            const productName = form.name.value;
            const subCategory = form.sub_category.value;
            const price = form.price.value;
            const rating = form.rating.value;
            const quantity = form.quantity.value;
            const details = form.details.value;
            const picture = form.picture.value;

            const updatedToy = {sellerName , sellerEmail , productName , subCategory , price ,rating,quantity ,details, picture  };

        console.log(updatedToy);

        fetch(`https://assignment11-animal-toys-server-side.vercel.app/toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){

                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated SuccessFully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })

    }
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='my-8 text-2xl font-bold text-rose-500 text-center'>Update toy: {toy.productName}</h1>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    
                    {/* seller name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" placeholder="Seller Name" defaultValue={user?.displayName} name='seller_name' className="input input-bordered" />
                    </div>

                     {/* seller email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" placeholder="Seller Email"
                        defaultValue={user?.email} name='seller_email' className="input input-bordered" />
                    </div>

                     {/* product name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" defaultValue={productName} name='name' className="input input-bordered" />
                    </div>

                     {/* sub-category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" placeholder="Sub Category" defaultValue={subCategory} name='sub_category' className="input input-bordered" />
                    </div>
                     
                     {/* product price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" defaultValue={price} name='price' className="input input-bordered" />
                    </div>

                    {/* product rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" defaultValue={rating} name='rating' className="input input-bordered" />
                    </div>

                    {/* Quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="number" placeholder="Quantity" defaultValue={quantity} name='quantity'  className="input input-bordered" />
                    </div>

                    {/* picture url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" placeholder="url" defaultValue={picture} name='picture' className="input input-bordered" />
                    </div>
                </div>
                 
                 {/* description */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" defaultValue={details} name='details' className="input input-bordered" />
                    </div>

                    <input className='btn btn-block my-8 bg-rose-400 border-none hover:bg-rose-500' type="submit" value="Submit" />
            </form >
        </div>
    );
};

export default UpdateToy;