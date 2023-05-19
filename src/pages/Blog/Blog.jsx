import React, { useEffect } from 'react';
import img from '../../assets/authentication-tokens.jpg'
import img1 from '../../assets/Artboard-3.png'
import img2 from '../../assets/62448459577c97af6b9493a5dfd2008d262c4410-2240x1260.png'
import img3 from '../../assets/images (1).jpg'
const Blog = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | Blog';
    }, [])
    return (
        <div>
            <div>
                <div className="relative bg-purple-400">
                    <div className="absolute inset-x-0 bottom-0">
                        <svg
                            viewBox="0 0 224 12"
                            fill="currentColor"
                            className="w-full -mb-1 text-white"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                        </svg>
                    </div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                                Blog

                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={img}
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                18 MAY 2023
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-6">What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.It's important to keep in mind that the OAuth 2.0 specification defines access tokens and refresh tokens. So, if we were to discuss authorization strategies in terms of other identity protocols or frameworks, such as SAML, we would not have the concepts of access tokens or refresh tokens.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.9K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">90</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={img1}
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                15 MAY 2023
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">Compare SQL and NoSQL databases?</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">8.4K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">91</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={img2}
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                14 Dec 2023
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">
                                    What is express js? What is Nest JS ?
                                </p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">6.4K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">71</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={img3}
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                10 MAY 2023
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">
                                    What is MongoDB aggregate and how does it work ?
                                </p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">9.4K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">100</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;