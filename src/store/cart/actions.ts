import { createAction } from '@reduxjs/toolkit';

import { Cart } from './reducer';
import { store } from '../';

const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_TO_CART = 'cart/REMOVE_TO_CART';

export const addToCart = createAction(ADD_TO_CART, (item: Cart) => {
  const { cart } = store.getState();

  let items: Cart[] = [];

  const itemFiltered = cart.cart.find((product) => product.id === item.id);

  if (itemFiltered) {
    items = [...cart.cart];
  } else {
    items = [...cart.cart, item];
  }

  return {
    payload: items,
  };
});
