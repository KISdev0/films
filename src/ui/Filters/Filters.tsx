import Checkboxes from "../Checkboxes/Checkboxes";
import Select from "../Select/Select";
import styles from "./Filters.module.css";

const Filters = () => {
  const sortOptions = ["Популярности", "Дате выхода", "Рейтингу"];
  const yearOptions = ["2020", "2019", "2018"];
  const genres = ["Комедия", "Боевик", "Драма"];
  return (
    <div className={styles.filters}>
      <h3 className={styles.header}>
        Фильтры<button className={styles.buttonClose}>X</button>
      </h3>

      <Select label="Сортировать по:" options={sortOptions} />
      <Select label="Год реллиза:" options={yearOptions} />
      <Checkboxes label="Жанры" options={genres} />
    </div>
  );
};

export default Filters;
