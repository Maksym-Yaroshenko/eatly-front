// src/components/App.tsx

import { HomePage } from '../pages/HomePage/HomePage';
import './App.module.css';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
