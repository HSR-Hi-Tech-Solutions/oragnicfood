import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import BlogCard from "../../common/BlogCard/BlogCard";

import thumb1 from '../../assets/news-thumb-01.jpg';
import thumb2 from '../../assets/news-thumb-02.jpg';
import thumb3 from '../../assets/news-thumb-03.jpg';

const Blogs = () => {
    var blog1 = {
        image: thumb1,
        alt: "Healthy Life Banner",
        title: "Worthy Cyber Monday Organic Food From Foodpond",
        datetime: "August 14, 2022",
        author: "Thamim",
        url: "https://orgado-react.vercel.app/blog-details/1"
    }
    var blog2 = {
        image: thumb2,
        alt: "Healthy Life Banner",
        title: "Holiday Home Delivery We have Recently Ordered",
        datetime: "August 14, 2022",
        author: "Thamim",
        url: "https://orgado-react.vercel.app/blog-details/2"
    }
    var blog3 = {
        image: thumb3,
        alt: "Healthy Life Banner",
        title: "Worthy Cyber Monday Organic Food From Foodpond",
        datetime: "August 14, 2022",
        author: "Thamim",
        url: "https://orgado-react.vercel.app/blog-details/3"
    }
  return (
    <>
    <section className="hsr-blogs">
        <Container className="hsr-blogs-inner">
            <p className="sub-heading">News Insight</p>
            <h1 className="main-heading">News From Orgado</h1>
            <Row className="mt-5">
                <Col xs={12} md={4} lg={4}>
                    <BlogCard data={blog1} />
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <BlogCard data={blog2} />
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <BlogCard data={blog3} />
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Blogs