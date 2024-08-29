import styles from '../styles/tariff.module.css';

const TariffCard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      {data.map((item, index) => (
        <div key={index} className={styles.tariffItem}>
          <div className={styles.itemContent}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TariffCard;

