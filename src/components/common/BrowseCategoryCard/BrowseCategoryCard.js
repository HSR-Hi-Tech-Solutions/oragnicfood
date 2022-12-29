import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './BrowseCategoryCard.scss';

const BrowseCategoryCard = (props) => {
  return (
    <>
    <Col lg={3} md={6} xs={12}>

        <Card className="hsr-card">
            <div className='hsr-thumb'>
        <img src={props.cardImg} alt="Card Image" />
            </div>
            <div className='hsr-text'>
            <h4>{props.CardHeading}</h4>
            
                {props.cardItem.map(item=>(
                    <li>{item}</li>
                ))}
            </div>
            
        </Card>
    </Col>
    </>
  )
}

export default BrowseCategoryCard