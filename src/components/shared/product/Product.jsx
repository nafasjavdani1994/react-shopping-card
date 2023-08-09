import React, { useContext } from 'react';

//  Icons
import trashIcon from '../../../assets/icons/trash.svg'

// Context
import { CardContext } from '../../../context/CardContextProvider';

// Function
import { shorten, isInCard, quantityCount } from '../../../helpers/functions';

// React-Router-Dom
import { Link } from 'react-router-dom';

// Styles
import './product.css';

const Product = ({ data }) => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <div className='product__container'>
      <img className='product__image' src={data.image} alt='productImg' />
      <h3>{shorten(data.title)}</h3>
      <p>${data.price}</p>
      <div className='product__control'>
        <Link className='product__detail' to={`${data.id}`}>
          Details
        </Link>
        <div className='product__btns'>
        {quantityCount(state, data.id) === 1 && (
            <button className='product__btn-control'
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: data })}
            >
              <img src={trashIcon} className='icon' alt='trash icon' />
            </button>
          )}

          {quantityCount(state, data.id) > 1 && (
            <button
              className='product__btn-control'
              onClick={() => dispatch({ type: 'DECREASE', payload: data })}
            >
              -
            </button>
          )}

          
          {quantityCount(state, data.id) > 0 && (
            <span className='product__quantity'>
              {quantityCount(state, data.id)}
            </span>
          )}

          {isInCard(state, data.id) ? (
            <button
              className='product__btn-control'
              onClick={() => dispatch({ type: 'INCREASE', payload: data })}
            >
              +
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: data })}
            >
              Add to Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
