import React, { useContext } from 'react';

// Context
import { CardContext, sumItems } from '../../../context/CardContextProvider';

// Icons
import trashIcon from '../../../assets/icons/trash.svg';

// Functions
import { shorten } from '../../../helpers/functions';

// Styles
import './card.css';

const Card = (props) => {
  const { image, title, quantity, price } = props.data;
  const { dispatch } = useContext(CardContext);
  return (
    <div className='card__container'>
      <img className='card__image' src={image} alt={title} />
      <div className='card__detail'>
        <h3>{shorten(title)}</h3>
        <p className='card__price'>${price}</p>
      </div>

      <div className='card__btns'>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: 'DECREASE', payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_ITEM', payload: props.data })
            }
          >
            <img src={trashIcon} className='card__btn-icon' alt='trash icon' />
          </button>
        )}

        <div>
          <span className='card__quantity'>{quantity}</span>
        </div>

        <button
          onClick={() => dispatch({ type: 'INCREASE', payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
