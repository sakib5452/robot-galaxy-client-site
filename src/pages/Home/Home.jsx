import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import BestSell from '../BestSell/BestSell';
import Gallery from '../Gallery/Gallery';

import TabSection from '../Tab/TabSection';


const Home = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | Home';
    }, [])
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BestSell></BestSell>
            <TabSection></TabSection>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;