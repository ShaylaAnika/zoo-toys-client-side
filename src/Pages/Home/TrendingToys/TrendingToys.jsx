import React from 'react';

const TrendingToys = () => {
    return (
        <div  className='max-w-screen-xl mx-auto my-28'>
            <h1 data-aos="zoom-in-left" className='text-center mt-14 mb-6 text-5xl font-bold text-rose-500'>Teranding Animal Toys</h1>

            <p data-aos="zoom-in-right" className='text-center lg:px-40 mb-20 text-gray-500'>Looking for the perfect toys to bring joy and excitement to the little ones in your life? Look no further! We've curated a collection of the hottest trending toys that are sure to make kids of all ages jump with delight.

            </p>

            <div className="carousel rounded-box h-[500px]">
                <div className="carousel-item w-30">
                    <img data-aos="zoom-out" src="https://m.media-amazon.com/images/I/91Z3YE3SyHL._AC_SL1500_.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img data-aos="zoom-out" src="https://m.media-amazon.com/images/I/71zdy6-Uw9L._AC_SL1500_.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img data-aos="zoom-out" src="https://m.media-amazon.com/images/I/819t3qdQV7L._AC_SL1500_.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img data-aos="zoom-out" src="https://m.media-amazon.com/images/I/61yykulnYUL._AC_SL1500_.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img data-aos="zoom-out" src="https://m.media-amazon.com/images/I/61lyh-wT6RL._AC_SL1200_.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img data-aos="zoom-out" src="https://m.media-amazon.com/images/I/81MaolWLqdL._AC_SL1500_.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img data-aos="zoom-out" src="https://m.media-amazon.com/images/I/91AyrlbE3oL._AC_SL1500_.jpg" alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default TrendingToys;