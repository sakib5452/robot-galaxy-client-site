import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | Home';
    }, [])
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;