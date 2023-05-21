import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyDetail from '../AllToyDetail/AllToyDetail';

const AllToys = () => {

    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        document.title = 'Robot Galaxy | All Toys';
    }, [])
    return (
        <div>
            <h2 className="text-5xl">Your bookings: </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(detail => <AllToyDetail
                                key={detail._id}
                                detail={detail}

                            ></AllToyDetail>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;