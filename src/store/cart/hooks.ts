import { shallowEqual } from 'react-redux';
import { RootState, useAppDispatch, useAppSelector } from '../';
import { addToCart as addToCartAction } from './actions';
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

  return {
    ...cartState,
    addToCart,
  };
};
