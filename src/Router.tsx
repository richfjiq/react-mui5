import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CharacterPage, Home, Login } from './pages';
import { RouterLayout } from './common/RouterLayout';

export const AppRouter: FC = () => {
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
