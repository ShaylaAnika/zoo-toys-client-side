import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';

const Categories = () => {

    const [toys, setToys] = useState([]);

    const [categorie, setCatgorie] = useState('teddy bear');

    useEffect(() => {
        fetch(`https://assignment11-animal-toys-server-side.vercel.app/categoriesToy/${categorie}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [categorie])

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h2 data-aos="zoom-in-down" className='text-center text-4xl font-bold text-gray-600 mb-10'>Shop By Category</h2>

            <Tabs className='border-2 border-rose-200 rounded-lg'>
                <TabList className='bg-rose-300 text-center h-10'>
                    <Tab onClick={() => setCatgorie('teddy bear')}>Teddy Bear toys</Tab>
                    <Tab onClick={() => setCatgorie('Dinosaur')}>Dinosaur Toys</Tab>
                    <Tab onClick={() => setCatgorie('Unicorn')}>Unicorn Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-8 my-10 justify-center items-center'>
                        {
                            toys.map(toy => <ToysCard key={toy._id} toy={toy}></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-8 my-10 justify-center items-center'>
                        {
                            toys.map(toy => <ToysCard key={toy._id} toy={toy}></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-8 my-10 justify-center items-center'>
                        {
                            toys.map(toy => <ToysCard key={toy._id} toy={toy}></ToysCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;