import React from 'react';
import pic from '../../assets/best sell/71zb8RP3mUL._AC_UL600_FMwebp_QL65_.webp'
import pic1 from '../../assets/best sell/61Jk-Pl2-AL._AC_UL600_FMwebp_QL65_.webp'
import pic2 from '../../assets/best sell/71FTXVVdf4L._AC_UL600_FMwebp_QL65_.webp'
import pic3 from '../../assets/best sell/71O0-zCuOFL._AC_UL600_QL65_.jpg'

const BestSell = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <span className="relative">Best Selling Product</span>
                        </span>

                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                    <a
                        aria-label="View Item"
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <img
                                src={pic}
                                className=" w-full h-80"
                                alt=""
                            />
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-semibold text-black leading-5">
                                        Transformers Toys Legacy Evolution Deluxe Needlenose Toy
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        This Needlenose toy for 8 year old boys and girls comes with Decepticon Sunbeam and Decepticon Zigzag Targetmaster figures that convert into blaster accessories in 1 step
                                    </p>
                                    <p className='font-semibold mt-2'>Price: $22</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="View Item"
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-80">
                            <img
                                src={pic1}
                                className=" w-full h-full"
                                alt=""
                            />
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        STAR WARS The Black Series Omega (Mercenary Gear)
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        This Needlenose toy for 8 year old boys and girls comes with Decepticon Sunbeam and Decepticon Zigzag Targetmaster figures that convert into blaster accessories in 1 step
                                    </p>
                                    <p className='font-semibold mt-2'>Price: $32</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="View Item"
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <img
                                src={pic2}
                                className=" w-full h-80"
                                alt=""
                            />
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-semibold leading-5">Spider-Man Marvel Legends Series Across </h6>
                                    <p className="text-sm text-gray-900">
                                        This Needlenose toy for 8 year old boys and girls comes with Decepticon Sunbeam and Decepticon Zigzag Targetmaster figures that convert into blaster accessories in 1 step
                                    </p>
                                    <p className='font-semibold mt-2'>Price: $28</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="View Item"
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <img
                                src={pic3}
                                className="w-full h-80"
                                alt=""
                            />
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Toys Heroic Optimus Prime Action Figure
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        This Needlenose toy for 8 year old boys and girls comes with Decepticon Sunbeam and Decepticon Zigzag Targetmaster figures that convert into blaster accessories in 1 step
                                    </p>
                                    <p className='font-semibold mt-2'>Price: $38</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="text-center">
                    <a
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        See All
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BestSell;