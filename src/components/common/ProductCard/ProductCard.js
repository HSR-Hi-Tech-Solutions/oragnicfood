import React from 'react';
import './ProductCard.scss';

const ProductCard = (props) => {
  return (
    <div className='card hsr-common-product-card'>
        <div className='hsr-image-wrapper'>
            <img src={props.image} alt={props.alt} />
        </div>
        <div className='hsr-actions'></div>
    </div>
  )
}

export default ProductCard