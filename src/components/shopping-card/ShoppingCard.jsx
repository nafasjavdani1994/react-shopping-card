import React, { useContext } from 'react';

// Components
import Card from '../shared/card/Card';

// Context
import { CardContext } from '../../context/CardContextProvider';
import { Link } from 'react-router-dom';

// Styles
import './shoppingCard.css';

const ShoppingCard = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className='shopping-card__container'>
      <div className='cartContainer'>
        {state.selectedItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className='shopping-card__payment'>
          <p>
            Total Items:<span>{state.itemsCounter}</span>
          </p>
          <p>
            Total Payment:<span>${state.total}</span>
          </p>
          <div className='shopping-card__btns'>
            <button
              className='btn__clear'
              onClick={() => dispatch({ type: 'CLEAR' })}
            >
              Clear
            </button>
            <button
              className='btn__checkout'
              onClick={() => dispatch({ type: 'CHECKOUT' })}
            >
              CheckOut
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className='payment__complete'>
          <h3>Checkout successfully</h3>
          <Link to='/products'>Buy More</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className='payment__complete'>
          <h3>Want to Buy?</h3>
          <Link to='/products'>Go to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCard;
