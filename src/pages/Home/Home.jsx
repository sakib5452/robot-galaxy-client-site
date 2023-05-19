import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | Home';
    }, [])
    return (
        <div>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;