import React from 'react';
import Blogs from "./Blogs";
import Brands from "./Brands";
import Features from "./Features";
import HeroImage from "./HeroImage";
import './Home.scss';
import Product1 from './Product1';
import ProductBanner from './ProductBanner';

const Home = () => {
  return (
    <div className='bg-white'>
    <HeroImage />
    <Features />
    <ProductBanner />
    <Product1 />
    <Brands />
    <Blogs />
    </div>
  )
}

export default Home;