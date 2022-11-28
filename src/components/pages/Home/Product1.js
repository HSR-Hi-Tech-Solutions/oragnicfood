import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductList1 from './ProductList1';

const Product1 = () => {
  return (
    <>
    <Container>
        <Row>
            <Col xl={3} lg={4} md={4} sm={12}>
                <div className='hsr-single-banner mb-5'>
                    <div className='hsr-text'>
                        <span>Organic</span>
                        <h3>Fresh Masala</h3>
                    </div>
                </div>
            </Col>
            <Col xl={9} lg={8} md={8} sm={12}>
                <ProductList1 />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Product1