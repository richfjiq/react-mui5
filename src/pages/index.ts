import { lazy } from 'react';

export const CharacterPage = lazy(() => import('./Character'));
export const Login = lazy(() => import('./Login'));
export * from './Home';
