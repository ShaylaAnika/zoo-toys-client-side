import React from 'react';

const Others = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='border-2 p-4 rounded-lg text-center hover:border-rose-500'>
                    <img className='mx-auto my-4 w-20' src="https://htmldemo.net/kidol/kidol/assets/img/icons/f1.png" alt="" />

                    <h2 className='text-2xl font-bold text-gray-700 my-2'>Free Shipping</h2>
                    <p className='text-gray-500 mt-4'>With free shipping, there are no limits to your shopping spree. Explore our extensive collection, find the perfect items, and let us handle the rest</p>

                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='border-2 p-4 rounded-lg text-center hover:border-rose-500'>
                    <img className='mx-auto my-4 w-16' src="https://htmldemo.net/kidol/kidol/assets/img/icons/f2.png" alt="" />

                    <h2 className='text-2xl font-bold text-gray-700 my-2'>Support 24/7</h2>
                    <p className='text-gray-500 mt-4'>Our dedicated support team is always ready to lend a helping hand, day or night. Whether you have inquiries about our products, need assistance with placing an order.</p>

                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='border-2 p-4 rounded-lg text-center hover:border-rose-500'>
                    <img className='mx-auto my-4 w-16' src="https://htmldemo.net/kidol/kidol/assets/img/icons/f3.png" alt="" />

                    <h2 className='text-2xl font-bold text-gray-700 my-2'>Money Return</h2>
                    <p className='text-gray-500 mt-4'> We provide a straightforward return process. Simply reach out to our customer support, and we'll guide you through the return procedure</p>

                </div>
            </div>
        </div>
    );
};

export default Others;