import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyDetail from '../MyToyDetail/MyToyDetail';

const MyToys = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | My Toys';
    }, [])

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://robot-galaxy-server.vercel.app/toyss/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }, [user]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://robot-galaxy-server.vercel.app/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toys => <MyToyDetail
                                key={toys._id}
                                toys={toys}
                                handleDelete={handleDelete}
                            ></MyToyDetail>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;