import { Cart } from '../store/cart/reducer';

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string) ?? null;
};

export const setItem = (key: string, data: Cart[]) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
