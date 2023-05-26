import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Others from '../Others/Others';
import ToysGallary from '../ToysGallary/ToysGallary';
import TrendingToys from '../TrendingToys/TrendingToys';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ToysGallary></ToysGallary>
            <Categories></Categories>
            <TrendingToys></TrendingToys>
            <Others></Others>
        </div>
    );
};

export default Home;