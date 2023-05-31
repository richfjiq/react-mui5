import { createAction } from '@reduxjs/toolkit';

import { Cart } from './reducer';
import { store } from '../';
import { setItem } from '../../utils';

const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_TO_CART';
const LOAD_CART_FROM_LOCAL_STORAGE = 'cart/LOAD_CART_FROM_LOCAL_STORAGE';

export const addToCart = createAction(ADD_TO_CART, (item: Cart) => {
  const { cart } = store.getState();

  let items: Cart[] = [];

  const itemFiltered = cart.cart.find((product) => product.id === item.id);

  if (itemFiltered) {
    items = [...cart.cart];
  } else {
    items = [...cart.cart, item];
  }

  setItem('cart', items);

  return {
    payload: items,
  };
});

export const removeFromCart = createAction(
  REMOVE_FROM_CART,
  (id: string | number) => {
    const { cart } = store.getState();

    const filteredCart = cart.cart.filter((item) => item.id !== id);

    setItem('cart', filteredCart);

    return {
      payload: filteredCart,
    };
  }
);

export const loadCartFromLocalStorage = createAction(
  LOAD_CART_FROM_LOCAL_STORAGE,
  (cart: Cart[]) => {
    return {
      payload: cart,
    };
  }
);
