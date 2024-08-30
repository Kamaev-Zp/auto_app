// src/components/MainCard.js
import React from 'react';
import styles from '../styles/mainCard.module.css';

const MainCard = ({ title, icon1 }) => {
  return (
    <div className={styles.mainCard}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.icon}>{icon1}</div>
    </div>
  );
};

export default MainCard;
