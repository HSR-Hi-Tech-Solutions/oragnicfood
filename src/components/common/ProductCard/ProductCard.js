import React from 'react';
import { StarFill,CartPlus, Eye, Heart } from 'react-bootstrap-icons';
import './ProductCard.scss';

const ProductCard = (props) => {
  return (
    <div className='card hsr-common-product-card'>
        <div className='hsr-image-wrapper'>
            <img src={props.image} alt={props.alt} />
            <span className={props.tag_style}>{props.tag}</span>
        </div>
        <div className='hsr-actions hsr-hide'>
          <span className='hsr-action-icon shadow'>
            <CartPlus />
          </span>
          <span className='hsr-action-icon shadow'>
            <Eye />
          </span>
          <span className='hsr-action-icon shadow'>
            <Heart />
          </span>
        </div>
        <div className='hsr-card-body'>
          <h3><a href="#">{props.itemName}</a></h3>
          <p><span className='hsr-strike-text'>&nbsp;$ {props.mrp}&nbsp;</span>&nbsp; &nbsp; <span className='hsr-selling-price'><b>$ {props.sellingPrice}</b></span></p>
          <p  className='hsr-yellow-star' ><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></p>
        </div>
    </div>
  )
}

export default ProductCard