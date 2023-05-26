import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-32'>
                <div className='max-w-md text-center'>
                    <img className='w-[500px]' src='https://img.freepik.com/premium-vector/error-404-nothing-found-banner_18591-27339.jpg?w=1380' alt="" />
                    <h2 className='mb-8 mt-10 font-extrabold text-9xl text-rose-500'>
                        <span className='sr-only'>Error</span> 404
                    </h2>

                    <Link className='text-2xl font-semibold text-gray-600 underline' to={'/'}>Back to home</Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;