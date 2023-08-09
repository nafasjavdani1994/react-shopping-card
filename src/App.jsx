import React, { useContext } from 'react';

// Routes
import { Route, Routes, Navigate } from 'react-router-dom';

// Components
import Store from './components/store/Store';
import ProductDetails from './components/product-detail/ProductDetails';
import Nav from './components/nav/Nav';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CardContextProvider';
import ShoppingCard from './components/shopping-card/ShoppingCard';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Nav />
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/*' element={<Navigate to='/products' />} />
          <Route path='/card' element={<ShoppingCard />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
