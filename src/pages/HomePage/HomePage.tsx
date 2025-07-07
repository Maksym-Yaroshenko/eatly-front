// src/pages/HomePage/HomePage.tsx

import React from 'react';
import styles from './HomePage.module.css';
import '../../index.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Welcome to Eatly</h1>
      <p className={styles.description}>
        Your one-stop solution for all your food delivery needs.
      </p>
      <button className={styles.button}>Get Started</button>
    </div>
  );
};
