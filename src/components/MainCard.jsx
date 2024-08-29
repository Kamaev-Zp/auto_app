import React from "react";
import styles from "../styles/mainCard.module.css";

const MainCard = ({ title, icon1 }) => {
  return (
    <div className={styles.mainCard}>
      <span className={styles.title}>{title}</span>
      <div className={styles.icon}>{icon1}</div>
    </div>
  );
};

export default MainCard;
