import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../hooks/useTitle';



const Login = () => {
    const { signIn , signInGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('login')

    const from = location.state?.from?.pathname || '/';

    const loginGoogleHandle = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from);

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })


    }
    return (

        <div className='max-w-screen-xl mx-auto'>

            <div className="hero min-h-screen mb-12">
                <div className="flex gap-8 justify-between  flex-col lg:flex-row-reverse">
                    <div className='my-auto'>
                        <img className='w-[1800px]' src={'https://img.freepik.com/premium-photo/children-s-toys-white-background_168508-619.jpg?w=1800'} alt="" />
                        
                    </div>
                    <div className="card w-full shadow-2xl shadow-rose-300 bg-base-100 m-6 p-6">
                    <h1 className="text-3xl font-bold  text-center">Please Login!!</h1>
                        <form onSubmit={handleLogin} className="card-body">
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

                                <span className='mt-2 text-gray-600'><small>Don't Have an Account? </small><Link to={'/register'} className="label-text-alt link link-hover text-rose-500">Register</Link></span>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-rose-400 hover:bg-rose-600 border-none">Login</button>
                            </div>
                        </form>

                        <div className="divider py-2">OR</div>
                        <div className='text-center my-6'>
                            
                            <button onClick={loginGoogleHandle} className ='inline-flex items-center bg-gray-200 p-2 rounded text-xl'><img className='w-8 h-8' src={'https://cdn-icons-png.flaticon.com/128/300/300221.png'} alt="" />oogle</button>
                        </div>
                        <p className="text-red-600 p-4">{error}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;