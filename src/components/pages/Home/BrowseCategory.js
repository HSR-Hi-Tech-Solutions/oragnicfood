import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { CardHeading } from 'react-bootstrap-icons';
import category1 from '../../assets/category-thumb-01.png';
import category2 from '../../assets/category-thumb-02.png';
import category3 from '../../assets/category-thumb-03.png';
import category4 from '../../assets/category-thumb-04.png';
import BrowseCategoryCard from '../../common/BrowseCategoryCard/BrowseCategoryCard';

const BrowseCategory = () => {
    const Category = [
        {
            cardImg : category1,
            CardHeading: "Fruit & Vegetable",
            cardItem: ["Cauliflower", "Cucumber", "Orange", "Banana", "Potato", "Strawberry"],
            background: "back-01"
        },
        {
            cardImg : category2,
            CardHeading: "Dairy Products",
            cardItem: ["Butter", "Chocolate", "Honey", "Cheese", "Ice Cream", "Milk"],
            background: "back-02"
        },
        {
            cardImg : category3,
            CardHeading: "Grocery & Staple",
            cardItem: ["Noodle", "Oils", "Onion", "Red Gram", "Rice", "Flavor"],
            background: "back-02"
        },
        {
            cardImg : category4,
            CardHeading: "Miscellaneous",
            cardItem: ["Nut & Seed", "Oils", "Fruits", "Tomatoe", "Soup", "More Product"],
            background: "back-02"
        },
    ]
  return (
    <Container fluid className='mt-5 mb-5 hsr-browse-category'>
        <Container>
            <h1>Browse By Category</h1>
            <div className='mt-5'>
                <Row>
                    {
                        Category.map(item=>(
                            <BrowseCategoryCard cardImg={item.cardImg} CardHeading={item.CardHeading} cardItem={item.cardItem} background={item.background} />
                        ))
                    }
                </Row>
            </div>
        </Container>
    </Container>
  )
}

export default BrowseCategory