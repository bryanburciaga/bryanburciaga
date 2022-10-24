import React from 'react';
import '../../App.css';
import VideoSection from '../VideoSection';
import Cards from '../Cards';
import Footer from '../Footer';
import About from './About';

function Home () {
    return (
        <>
            <VideoSection />
            <About />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;