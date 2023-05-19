import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import BestSell from '../BestSell/BestSell';

const Home = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | Home';
    }, [])
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BestSell></BestSell>
        </div>
    );
};

export default Home;