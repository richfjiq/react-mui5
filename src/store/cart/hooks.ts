import { shallowEqual } from 'react-redux';
import { RootState, useAppDispatch, useAppSelector } from '../';
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  loadCartFromLocalStorage as loadCartFromLocalStorageAction,
} from './actions';
import { useCallback } from 'react';
import { Cart } from './reducer';

export const useCart = () => {
  const cartState = useAppSelector(
    (state: RootState) => state.cart,
    shallowEqual
  );
  const dispatch = useAppDispatch();

  const addToCart = useCallback(
    (item: Cart) => {
      dispatch(addToCartAction(item));
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (id: number | string) => {
      dispatch(removeFromCartAction(id));
    },
    [dispatch]
  );

  const loadCartFromLocalStorage = useCallback(
    (cart: Cart[]) => {
      dispatch(loadCartFromLocalStorageAction(cart));
    },
    [dispatch]
  );

  return {
    ...cartState,
    addToCart,
    removeFromCart,
    loadCartFromLocalStorage,
  };
};
