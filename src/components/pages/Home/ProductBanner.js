import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ProductBanner = () => {
  return (
    <>
    <Container >
        <Row>
            <Col lg={4} md={4} sm={12}>
                <div className='product-banner' id="product-banner-1">
                <div className='hsr-inner'>
                <div class="hsr-banner-text">
                    <span>Organic</span>
                    <h3><a href="/shop">Meat &amp; Milk</a></h3>
                    <p>Premium quality meat &amp; milk</p>
                    <a class="hsr-button" href="/shop">Shop Now</a>
                    </div>
                </div>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <div className='product-banner' id="product-banner-2">
                <div className='hsr-inner'>
                <div class="hsr-banner-text">
                    <span>Organic</span>
                    <h3><a href="/shop">Vegetable</a></h3>
                    <p>Premium quality meat &amp; milk</p>
                    <a class="hsr-button" href="/shop">Shop Now</a>
                    </div>
                </div>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <div className='product-banner' id="product-banner-3">
                <div className='hsr-inner'>
                <div class="hsr-banner-text">
                    <span>Organic</span>
                    <h3><a href="/shop">Food &amp; Fruits</a></h3>
                    <p>Premium quality meat &amp; milk</p>
                    <a class="hsr-button" href="/shop">Shop Now</a>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ProductBanner;