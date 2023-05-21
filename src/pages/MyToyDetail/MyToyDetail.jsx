import React from 'react';

const MyToyDetail = ({ toys }) => {
    const { _id, name, price, quantity, img, rating } = toys
    return (
        <tr>
            <th></th>
            <td>
                <div className="avatar">
                    <div className="rounded-xl w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {quantity}
            </td>
            <td>{rating}</td>
            <td>${price}</td>
            <th>

                <button className="btn btn-ghost btn-xs">Please Confirm</button>
            </th>
            <th>
                <button className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default MyToyDetail;