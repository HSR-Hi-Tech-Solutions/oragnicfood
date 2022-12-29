import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../../common/ProductCard/ProductCard';

import fruit1 from '../../assets/fruits-01.png';
import fruit2 from '../../assets/fruits-02.png';

const ProductList1 = () => {

  const AllData = [
    {
    image: fruit1,
    alt: "Fruit 1",
    itemName: "Fruit 1",
    mrp: "35.00",
    sellingPrice: "29.70",
    tag: "Sale",
    tag_style:"yellow-tag"
  },
  {
    image: fruit2,
    alt: "Fruit 2",
    itemName: "Fruit 2",
    mrp: "37.00",
    sellingPrice: "30.80",
    tag: "New",
    tag_style:"green-tag"
  },
  {
    image: fruit1,
    alt: "Fruit 3",
    itemName: "Fruit 3",
    mrp: "28.00",
    sellingPrice: "17.52",
    tag: "",
    tag_style:""
  },
  {
    image: fruit2,
    alt: "Fruit 4",
    itemName: "Fruit 4",
    mrp: "35.00",
    sellingPrice: "29.70",
    tag: "30%",
    tag_style:"pink-tag"
  }
  
]

const NewArrival =  [
  {
  image: fruit2,
  alt: "Fruit 1",
  itemName: "Fruit 1",
  mrp: "35.00",
  sellingPrice: "29.70",
  tag: "Sale",
  tag_style:"yellow-tag"
},
{
  image: fruit1,
  alt: "Fruit 2",
  itemName: "Fruit 2",
  mrp: "37.00",
  sellingPrice: "30.80",
  tag: "New",
  tag_style:"green-tag"
},
{
  image: fruit2,
  alt: "Fruit 3",
  itemName: "Fruit 3",
  mrp: "28.00",
  sellingPrice: "17.52",
  tag: "",
  tag_style:""
},
{
  image: fruit1,
  alt: "Fruit 4",
  itemName: "Fruit 4",
  mrp: "35.00",
  sellingPrice: "29.70",
  tag: "30%",
  tag_style:"pink-tag"
}

]


const BestSale = [
  {
  image: fruit1,
  alt: "Fruit 1",
  itemName: "Fruit 1",
  mrp: "35.00",
  sellingPrice: "29.70",
  tag: "Sale",
  tag_style:"yellow-tag"
},
{
  image: fruit2,
  alt: "Fruit 2",
  itemName: "Fruit 2",
  mrp: "37.00",
  sellingPrice: "30.80",
  tag: "New",
  tag_style:"green-tag"
},
{
  image: fruit1,
  alt: "Fruit 3",
  itemName: "Fruit 3",
  mrp: "28.00",
  sellingPrice: "17.52",
  tag: "",
  tag_style:""
},
{
  image: fruit2,
  alt: "Fruit 4",
  itemName: "Fruit 4",
  mrp: "35.00",
  sellingPrice: "29.70",
  tag: "30%",
  tag_style:"pink-tag"
}

]

const Featured = [
  {
  image: fruit2,
  alt: "Fruit 1",
  itemName: "Fruit 1",
  mrp: "35.00",
  sellingPrice: "29.70",
  tag: "Sale",
  tag_style:"yellow-tag"
},
{
  image: fruit1,
  alt: "Fruit 2",
  itemName: "Fruit 2",
  mrp: "37.00",
  sellingPrice: "30.80",
  tag: "New",
  tag_style:"green-tag"
},
{
  image: fruit2,
  alt: "Fruit 3",
  itemName: "Fruit 3",
  mrp: "28.00",
  sellingPrice: "17.52",
  tag: "",
  tag_style:""
},
{
  image: fruit1,
  alt: "Fruit 4",
  itemName: "Fruit 4",
  mrp: "35.00",
  sellingPrice: "29.70",
  tag: "30%",
  tag_style:"pink-tag"
}

]



  return (
    <div className="hsr-product-list">
    <Row>
        <Col xl={4} lg={4} md={4} sm={12}>
            <h1>You May Missed</h1>
        </Col>
        <Col xl={8} lg={8} md={8} sm={12}>
            <div class="nav nav-tabs" role="tablist" id="hsr-tab">
            <button class="nav-link active" id="nav-tab-1-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-1" type="button" role="tab" aria-controls="nav-tab-1" aria-selected="true">View All</button>
            <button class="nav-link" id="nav-tab-2-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-2" type="button" role="tab" aria-controls="nav-tab-2" aria-selected="true">New Arrival</button>
            <button class="nav-link" id="nav-tab-3-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-3" type="button" role="tab" aria-controls="nav-tab-3" aria-selected="true">Best Sale</button>
            <button class="nav-link" id="nav-tab-4-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-4" type="button" role="tab" aria-controls="nav-tab-4" aria-selected="true">Featured</button>
            </div>
        </Col>
    </Row>
    <div className='hsr-product-cards'>
      <div className='tab-content' id="nav-tabContent">
      <div class="tab-pane fade active show" id="nav-tab-1" role="tabpanel" aria-labelledby="nav-tab-1-tab">
        <Row>
          {
            AllData.map(item =>(
              <Col lg={3} md={3} sm={12}>
                <ProductCard image={item.image} alt={item.alt} itemName={item.itemName} mrp={item.mrp} sellingPrice={item.sellingPrice} tag={item.tag} tag_style={item.tag_style} />
              </Col>
            ))
          }
        </Row>
      </div>
      <div class="tab-pane fade" id="nav-tab-2" role="tabpanel" aria-labelledby="nav-tab-2-tab">
      <Row>
          {
            NewArrival.map(item =>(
              <Col lg={3} md={3} sm={12}>
                <ProductCard image={item.image} alt={item.alt} itemName={item.itemName} mrp={item.mrp} sellingPrice={item.sellingPrice} tag={item.tag} tag_style={item.tag_style} />
              </Col>
            ))
          }
        </Row>
      </div>
      <div class="tab-pane fade" id="nav-tab-3" role="tabpanel" aria-labelledby="nav-tab-3-tab">
      <Row>
          {
            BestSale.map(item =>(
              <Col lg={3} md={3} sm={12}>
                <ProductCard image={item.image} alt={item.alt} itemName={item.itemName} mrp={item.mrp} sellingPrice={item.sellingPrice} tag={item.tag} tag_style={item.tag_style} />
              </Col>
            ))
          }
        </Row>
      </div>
      <div class="tab-pane fade" id="nav-tab-4" role="tabpanel" aria-labelledby="nav-tab-4-tab">
      <Row>
          {
            Featured.map(item =>(
              <Col lg={3} md={3} sm={12}>
                <ProductCard image={item.image} alt={item.alt} itemName={item.itemName} mrp={item.mrp} sellingPrice={item.sellingPrice} tag={item.tag} tag_style={item.tag_style} />
              </Col>
            ))
          }
        </Row>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ProductList1