import React from 'react';
import pic from '../../assets/best sell/man-helmet-with-number-3-it_1340-39432.avif'
import pic1 from '../../assets/best sell/high-tech-iron-man-suit-cyber-warrior-concept_379823-4929.avif'
import pic2 from '../../assets/best sell/realistic-superhero-man-with-superpowers-3d-render-illustration_691560-6119.avif'
import pic3 from '../../assets/best sell/red-robot-transformer-alien-invader-spaceship_107791-510.avif'
const Gallery = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <span className="relative">Our Gallery</span>
                        </span>

                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    <a aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className=" w-full h-56 md:h-64 xl:h-80"
                                src={pic}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">STAR WARS The Red Series</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                                    been dogged by two questions since the day it was made: Who’s
                                    the subject and why is she smiling?
                                </p>
                            </div>
                        </div>
                    </a>
                    <a aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className=" w-full h-56 md:h-64 xl:h-80"
                                src={pic1}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Iron Man Suit Cyber Warrior
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Vincent Van Gogh’s most popular painting, Iron Man Suit Cyber Warrior was
                                    created by Van Gogh at the asylum in Saint-Rémy, where he’d
                                    committed himself in 1889.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className=" w-full h-56 md:h-64 xl:h-80"
                                src={pic2}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">Realistic Superhero Man With Superpowers</p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Opulently gilded and extravagantly patterned, Realistic Superhero Man fin-de-siècle portrayal of intimacy, is a mix of
                                    Symbolism and Vienna Jugendstil, the Austrian variant of Art
                                    Nouveau.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className=" w-full h-56 md:h-64 xl:h-80"
                                src={pic3}
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-lg font-bold text-gray-100">
                                    Red Robot Transformer Alien
                                </p>
                                <p className="text-sm tracking-wide text-gray-300">
                                    Bruegel’s fanfare for the common man is considered one of the
                                    defining works of Western art. This composition was one of six
                                    created on the theme of the seasons.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="text-center">
                    <a
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        View Gallery
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;