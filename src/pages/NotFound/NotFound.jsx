import React, { useEffect } from 'react';
import pic from '../../assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif'
const NotFound = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | Page Not Found';
    }, [])
    return (
        <div className='lg:ml-96'>
            <img src={pic} alt="" />
        </div>
    );
};

export default NotFound;