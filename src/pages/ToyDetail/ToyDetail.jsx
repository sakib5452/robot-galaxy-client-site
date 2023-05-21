import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'
const ToyDetail = () => {
    const toysDetail = useLoaderData();
    const { name, img, price, rating, detail, quantity, category, sellerName, email } = toysDetail
    console.log(toysDetail)
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

                            >
                                <h1 className='text-xl font-bold text-purple-400'>Toy Name : <span className='text-xl font-semibold text-black'>{name}</span></h1>
                            </h1>
                            <h1
                                aria-label="Category"
                                title="Visit the East"

                            >
                                <h1 className='text-xl font-bold text-purple-400'>Seller Name: <span className='text-xl font-semibold text-black'>{sellerName}</span></h1>
                            </h1>
                            <h1
                                aria-label="Category"
                                title="Visit the East"

                            >
                                <h1 className='text-xl font-bold text-purple-400'>Email: <span className='text-xl font-semibold text-black'>{email}</span></h1>
                                <h1 className='text-xl font-bold text-purple-400'>Detail: <span className='text-xl font-semibold text-black'>{detail}</span></h1>
                            </h1>

                            <div className='flex gap-2 mt-2'>
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
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mt-2'>
                                <h4 className='text-xl font-bold text-purple-400'>Price : <span className='text-lg text-black'>${price}</span> </h4>
                                <h4 className='text-xl font-bold text-purple-400'>Quantity : <span className='text-lg text-black'>{quantity}</span> </h4>
                            </div>
                            <div className='mt-2'>
                                <h4 className='text-xl font-bold text-purple-400'>Category : <span className='text-lg text-black'>{category}</span></h4>

                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>

    );
};

export default ToyDetail;