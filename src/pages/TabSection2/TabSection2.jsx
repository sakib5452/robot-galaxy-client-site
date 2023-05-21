import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const TabSection2 = ({ toy }) => {
    const { name, img, price, rating, _id } = toy
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="gap-8 sm:max-w-sm sm:mx-auto lg:max-w-96">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src={img}
                            className=" w-full h-80"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <h1
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                {name}
                            </h1>
                            <div>
                                <h4 className='text-xl font-bold text-purple-400'>Price : <span className='text-lg text-black'>${price}</span> </h4>
                            </div>
                            <div className='flex gap-2'>
                                <h1 className='text-xl font-bold text-purple-400'>Rating :</h1>
                                <div className='flex mt-1'>
                                    <StarIcon className="h-5 w-5 text-orange-400" />
                                    <StarIcon className="h-5 w-5 text-orange-400" />
                                    <StarIcon className="h-5 w-5 text-orange-400" />
                                    <StarIcon className="h-5 w-5 text-orange-400" />
                                    <StarIcon className="h-5 w-5 text-orange-400" />
                                </div>
                                <div> <h4 className=' text-xl font-bold'>{rating}</h4></div>
                            </div>
                            <div className="text-center mt-3">
                                <Link
                                    to={`/toy/${_id}`}
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TabSection2;