import React from 'react';

const Blogs = () => {
    
    return (
        <div className='container p-lg-5 p-0' >
            <div className="p-lg-5 p-2 m-5 element-bg text-white rounded">
                <h2 className='main-color mb-5' >Difference between javascript and nodejs</h2>
                <p>
                  Javascript is a programming language on the otherhand Node js is javascript runtime
                </p>
                <p>
                    Javascript can only be run in browser but through Node js , we can run JS outside the browser.
                </p>
                <p>
                    Js can play with html dom but node js hasn't ability to modify html dom.
                </p>
                <p>
                    JS is used for client side and node js is used for server side.
                </p>
                <p>
                    Js is written in C++, nodejs is written in C, C++ and Javascript.
                </p>
            </div>
            <div className="p-lg-5 p-2 m-5 element-bg text-white rounded">
                <h2 className='main-color mb-5' > When should we use nodejs and when should you use mongodb</h2>
                <p>
                    Node js is a JS runtime, it is used for server side development. We need make API to connect client side to the server . Via node js we can create those API's.

                    For keeping information in client side, we need data or info . This data need to store somewhere, and database is the solution here . Mongodb is a noSQL database where we can store our info, and can modify and delete while needed.  
                </p>
            </div>
            <div className="p-lg-5 p-2 m-5 element-bg text-white rounded">
                <h2 className='main-color mb-5' > Differences between sql and nosql databases.</h2>
                <p>
                    SQL follows relational database system but NoSQL follows a non relational database system. 
                </p>
                <p>
                    SQL is suitable for complex queries but NoSQL is not suitable for complex queries.
                </p>
                <p>
                    SQL provides static schema but NoSQL provides dynamic schema. 
                </p>
                <p>
                    SQL is vertically scalable but NoSQL is horizontally scalable.
                </p>
                <p>
                    SQL is available to most major platforms, from operating systems to architectures and programming languages.NoSQL's compatibility varies more widely, and dependencies need to be investigated more carefully.
                </p>
            </div>
        </div>
    );
};

export default Blogs;