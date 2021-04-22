//import dependencies
import React from 'react';

//import modules
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import NavBar from '../components/NavBar';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import Footer from '../sections/Footer';
import ScrollTop from '../components/ScrollTop';

const Home = () => {

    return (
        <>
            <ScrollTop section1='section1' />
            <Section1 section1='section1' />
            <Section2 section2='section2' section5='section5' />
            <Section3 section3='section3' />
            <Section4 section4='section4' />
            <Section5 section5='section5' />
            <Footer />
            <NavBar
                section2='section2'
                section3='section3'
                section4='section4'
                section5='section5' />
        </>
    )
}

export default Home
