import React from 'react';
import Blogs from "./Blogs";
import Brands from "./Brands";
import HeroImage from "./HeroImage";
import './Home.scss';

const Home = () => {
  return (
    <>
    <HeroImage />
    <Brands />
    <Blogs />
    </>
  )
}

export default Home;