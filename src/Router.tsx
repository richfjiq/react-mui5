import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CharacterPage, Home, Login } from './pages';
import { RouterLayout } from './common/RouterLayout';
import { getItem } from './utils';
import { useCart } from './store';

export const AppRouter: FC = () => {
  const { loadCartFromLocalStorage } = useCart();

  useEffect(() => {
    if (getItem('cart')) {
      loadCartFromLocalStorage(getItem('cart'));
    }
  }, [loadCartFromLocalStorage]);

  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
