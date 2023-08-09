import React, { useContext } from 'react';

// Params + Link
import { useParams, Link } from 'react-router-dom';

// Context
import { ProductsContext } from '../../context/ProductContextProvider';

// Styles
import './productDetail.css'

const ProductDetails = () => {
  const data = useContext(ProductsContext);
  const params = useParams();
  const product = data[params.id - 1];

  const { image, description, title, price, category } = product;

  return (
    <div className='product-detail__container'>
      <img src={image} alt='productImg' />
      <div className='product-detail__content'>
        <h3>{title}</h3>
        <p className='product-detail__desc'>{description}</p>
        <p className='product-detail__category'>
          <span>Category: </span>
          {category}
        </p>
        <div className='product-detail__btns'>
          <span className='product-detail__price'>${price}</span>
          <Link to='/products'>Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
