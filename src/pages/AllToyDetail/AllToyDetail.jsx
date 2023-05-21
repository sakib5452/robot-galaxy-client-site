import React from 'react';


const AllToyDetail = ({ detail }) => {
    const { name, price, quantity, category } = detail
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

                <button className="btn btn-primary btn-xs">Please Confirm</button>
            </th>
        </tr>
    );
};

export default AllToyDetail;