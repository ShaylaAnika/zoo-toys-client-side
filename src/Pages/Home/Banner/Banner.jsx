import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686894.jpg?w=1800&t=st=1684400345~exp=1684400945~hmac=e4f66ea7a21f7c492dd0527768374dd45e484977a63598e6f2b93146bf6554e9")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md" data-aos="fade-up"
                        data-aos-anchor-placement="center-center">
                        <h1 className=" text-7xl font-bold">Toys <br />for kids</h1>
                        <p className="mb-5 text-xl">New animal toys collection</p>
                        <button className="btn bg-rose-400 border-none hover:bg-rose-500">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;