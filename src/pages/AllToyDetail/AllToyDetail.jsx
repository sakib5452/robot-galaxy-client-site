import React from 'react';
import { Link } from 'react-router-dom';


const AllToyDetail = ({ detail }) => {
    const { name, price, quantity, category, _id } = detail
    return (

        <tr>
            <th>

            </th>

            <td>
                {name}
            </td>
            <td>
                {category}
            </td>
            <td>{quantity}</td>
            <td>$ {price}</td>

            <th>
                <Link
                    to={`/toys/${_id}`}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                >
                    View Details
                </Link>


            </th>
        </tr>
    );
};

export default AllToyDetail;