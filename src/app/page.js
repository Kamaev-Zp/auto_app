import MainCard from "../components/MainCard";
import TariffCard from "../components/TariffCard";
import { tariffData } from "../app/data/data";
import "../styles/global.css";
import styles from "../styles/tariff.module.css";
import { MdOutlineDirectionsCar, MdOutlineDirectionsBus } from "react-icons/md";

const iconMap = {
  Седан: <MdOutlineDirectionsCar />,
  Мінівен: <MdOutlineDirectionsBus />,
};

const getTariffData = (key) => {
  const keyMapping = {
    Седан: 'sedan',
    Мінівен: 'minivan',
  };

  return tariffData.rows.map((row) => ({
    label: row.label,
    value: row[keyMapping[key]] || "—",
  }));
};

export default function Home() {
  return (
    <div className={styles.container}>
      {tariffData.headers.slice(1).map((header, index) => (
        <div key={index}>
          <MainCard
            title={header}
            icon1={iconMap[header] || <MdOutlineDirectionsCar />}
          />
          <TariffCard data={getTariffData(header)} />
        </div>
      ))}
    </div>
  );
}

