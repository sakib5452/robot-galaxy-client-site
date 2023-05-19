import React, { useEffect } from 'react';

const MyToys = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | My Toys';
    }, [])
    return (
        <div>
            my is coming soon
        </div>
    );
};

export default MyToys;