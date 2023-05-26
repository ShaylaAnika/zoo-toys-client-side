import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../hooks/useTitle';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    useTitle('register');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, image, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateProfile(createdUser, { displayName: name, photoURL: image })
                form.reset();

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        
            <div className='max-w-screen-xl mx-auto'>

                <div className="hero min-h-screen container mx-auto">
                    <div className="flex gap-8 justify-between  flex-col lg:flex-row-reverse">
                        <div className="text-center my-auto">
                        <img className='w-[1800px]' src={'https://img.freepik.com/premium-photo/colorful-educational-toys-children-white-surface_168508-308.jpg?w=1800'} alt="" />

                        </div>
                        <div className="card w-full shadow-2xl shadow-rose-300 bg-base-100 m-6 p-6">
                            <h1 className="text-3xl font-bold  text-center">Please Register!!</h1>
                            <form className="card-body " onSubmit={handleRegister}  >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name='image' placeholder="url" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                    <span className='mt-2 text-gray-600'><small>Already Have an Account? </small><Link to={'/login'} className="label-text-alt link link-hover text-rose-500">Login</Link></span>


                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-rose-400 hover:bg-rose-500  border-none">Sign Up</button>
                                </div>
                            </form>
                            <p className="text-red-600 p-4">{error}</p>
                        </div>
                    </div>
                </div>

            </div>
        
    );
};

export default Register;