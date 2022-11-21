import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from "react-bootstrap";

import brand1 from '../../assets/brand-01.png';
import brand2 from '../../assets/brand-02.png';
import brand3 from '../../assets/brand-03.png';
import brand4 from '../../assets/brand-04.png';
import brand5 from '../../assets/brand-05.png';
import brand6 from '../../assets/brand-06.png';

const Brands = () => {
    const options = {
        loop:true,
        margin: 30,
        responsiveclassName: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 6,
    
            }
        },
    };
  return (
    <>
    <section className="hsr-brands">
    <Container>
    <OwlCarousel className='owl-theme justify-content-center'  {...options}>
    <div className='item text-center'>
        <img src={brand1} alt="Brand 1 Logo" />
    </div>
    <div className='item'>
    <img src={brand2} alt="Brand 2 Logo" />
    </div>
    <div className='item'>
    <img src={brand3} alt="Brand 3 Logo" />
    </div>
    <div className='item'>
    <img src={brand4} alt="Brand 4 Logo" />
    </div>
    <div className='item'>
    <img src={brand5} alt="Brand 5 Logo" />
    </div>
    <div className='item'>
    <img src={brand6} alt="Brand 6 Logo" />
    </div>
    </OwlCarousel>
    </Container>
    </section>
    </>
  )
}

export default Brands