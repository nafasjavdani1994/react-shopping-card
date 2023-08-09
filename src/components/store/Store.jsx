import React, { useContext } from 'react';

// Context
import { ProductsContext } from '../../context/ProductContextProvider';

// Components
import Product from '../shared/product/Product';

// Styles
import './store.css';

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <section className='store__container'>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </section>
  );
};

export default Store;
