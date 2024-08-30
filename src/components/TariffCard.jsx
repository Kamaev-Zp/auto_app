import React from "react";
import styles from "../styles/tariff.module.css";

const TariffCard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li key={index} className={styles.tariffItem}>
            <div className={styles.itemContent}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TariffCard;


