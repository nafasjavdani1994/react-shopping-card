import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Icons
import ShoppingCard from '../../assets/icons/shop.svg'

// Context
import { CardContext } from '../../context/CardContextProvider';

// Styles
import './nav.css';

const Nav = () => {
  const { state } = useContext(CardContext);
  return (
    <div className='main__nav-container'>
      <div className='nav__container'>
        <Link className='nav__link' to='/products'>Products</Link>
        <div className='nav__icon-container'>
          <Link  to='/card'>
            <img src={ShoppingCard} alt='shopping-card-icon' />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
