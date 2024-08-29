import React from 'react';
import MainCard from '../components/MainCard';
import TariffCard from '../components/TariffCard';
import { tariffData } from '../app/data/data'; 
import '../styles/global.css'; 
import styles from '../styles/tariff.module.css'; 
import { MdOutlineDirectionsCar, MdOutlineDirectionsBus } from 'react-icons/md';

export default function Home() {
  return (
    <div className={styles.container}>
      <MainCard title="Седан" icon1={<MdOutlineDirectionsCar />} />
      <TariffCard
        data={tariffData.rows.map((row) => ({
          label: row.label,
          value: row.sedan,
        }))}
      />
      <MainCard title="Мінівен" icon1={<MdOutlineDirectionsBus />} />
      <TariffCard
        data={tariffData.rows.map((row) => ({
          label: row.label,
          value: row.minivan,
        }))}
      />
    </div>
  );
}
