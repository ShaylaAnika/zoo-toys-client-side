import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {

   const {user} = useContext(AuthContext); 
   const  handleAddToy = event => {
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

        const toyInfo = {sellerName , sellerEmail , productName , subCategory , price ,rating,quantity ,details, picture };

        console.log(toyInfo);

        fetch('https://assignment11-animal-toys-server-side.vercel.app/toys' , {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('toy added successful')
            }
        })
        
   }
    return (
        <div className='max-w-screen-xl mx-auto my-20 border-2 border-rose-200 rounded-lg p-12'>
            <h2 className='text-center my-8 text-5xl font-bold text-rose-400'>Add A Toy</h2>

            <form onSubmit={handleAddToy}>
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
                        <input type="text" placeholder="name" name='name' className="input input-bordered" />
                    </div>

                     {/* sub-category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" placeholder="Sub Category" name='sub_category' className="input input-bordered" />
                    </div>
                     
                     {/* product price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' className="input input-bordered" />
                    </div>

                    {/* product rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
                    </div>

                    {/* Quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="number" placeholder="Quantity" name='quantity'  className="input input-bordered" />
                    </div>

                    {/* picture url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" placeholder="url" name='picture' className="input input-bordered" />
                    </div>
                </div>
                 
                 {/* description */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered" />
                    </div>

                    <input className='btn btn-block my-8 bg-rose-400 border-none hover:bg-rose-500' type="submit" value="Submit" />
            </form >
        </div >
    );
};

export default AddToy;