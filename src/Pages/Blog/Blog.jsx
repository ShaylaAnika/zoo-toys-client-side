import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-center mt-28 text-5xl font-bold'> Question & Answer</h1>

            <div>
                <div className='my-10'>
                    <div className='border p-16 border-rose-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p className='text-gray-500'>Ans: An access token and refresh token are commonly used in authentication systems, such as OAuth, to grant secure access to resources on behalf of a user. Here's a brief explanation of what they are, how they work, and where they should be stored on the client-side: <br />
                            Access Token: <br />
                            An access token is a credential that is obtained by the client application after a successful authentication process. It serves as proof of authorization and is used to access protected resources on the server. Access tokens are typically short-lived and have an expiration time. <br />
                            Refresh Token: <br />
                            A refresh token is a long-lived credential that is also obtained during the authentication process. Its purpose is to obtain a new access token once the current access token expires. Refresh tokens are typically securely stored by the client and are not meant to be exposed to other parties.
                            <br />
                            Where to store tokens on the client-side: <br />
                            Access Token: The access token should be stored on the client-side securely but easily accessible. Commonly, it is stored in memory or in a client-side session. Storing it in memory allows for efficient retrieval when making requests to the <br />
                            Refresh Token: The refresh token requires more secure storage since it has a longer lifespan and poses a greater risk if compromised. It is usually stored in a secure HTTP-only cookie or a secure local storage, which helps prevent cross-site scripting (XSS) attacks and provides better protection.</p>
                    </div>

                    <div className='border p-16 border-rose-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>Compare SQL and NoSQL databases?</h1>
                        <p className='text-gray-500'>Ans: SQL and NoSQL are two different types of databases that serve different purposes. Here's a comparison between the two: <br />
                            SQL Databases: <br />
                            SQL databases, also known as relational databases, follow a structured schema with predefined tables, columns, and relationships between tables. SQL databases enforce strong data integrity through the use of constraints, such as primary keys, foreign keys, and unique constraints. They ensure data consistency and maintain referential integrity.SQL databases generally adhere to ACID (Atomicity, Consistency, Isolation, Durability) properties, which guarantee data integrity, transactional consistency, and reliable operations.SQL databases can handle large amounts of structured data and are suitable for complex queries and relationships. Vertical scaling (increasing hardware resources) is common for scaling SQL database. <br />
                            NoSQL Databases: <br />
                            NoSQL databases, also known as non-relational databases, offer flexible schemas, allowing for dynamic and unstructured data. The structure can vary from one document (in a document-oriented database) to key-value pairs (in a key-value store). NoSQL databases excel in horizontal scalability (scaling across multiple servers) and are designed to handle large amounts of data with high read/write throughput.  NoSQL databases often prioritize performance and can provide faster read and write operations due to their simplified structure and optimized storage mechanisms.NoSQL databases are designed for distributed computing and can handle massive amounts of data across multiple nodes or clusters. </p>
                    </div>

                    <div className='border p-16 border-rose-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>What is express js? What is Nest JS?</h1>
                        <p className='text-gray-500'>Ans: NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow. <br />
                            Express is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries. Express is popular among developers due to its simplicity and ease of use.</p>
                    </div>

                    <div className='border p-16 border-rose-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>What is MongoDB aggregate and how does it work?</h1>
                        <p className='text-gray-500'>Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.<br />
                            The aggregate method takes an array of pipeline stages as its parameter. Each stage represents a specific operation or transformation that is applied to the documents in the collection. The stages are processed sequentially, with the output of one stage serving as the input for the next stage. <br />
                            When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline (here's a more detailed tutorial). Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result. 

                            Before we dive into the code, let's understand what the aggregation pipeline itself does and how it works. In the aggregation pipeline, you list out a series of instructions in a "stage." For each stage that's defined, MongoDB executes them one after another in order to give a finalized output you're able to use.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;