import Checkboxes from "../Checkboxes/Checkboxes";
import Select from "../Select/Select";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <h3 className={styles.header}>
        Фильтры<button className={styles.buttonClose}>X</button>
      </h3>

      <Select
        label="Сортировать по:"
        options={["Популярности", "Дате выхода", "Рейтингу"]}
      />
      <Select label="Год реллиза:" options={["2020", "2019", "2018"]} />
      <Checkboxes label="Жанры" options={["Комедия", "Боевик", "Драма"]} />
    </div>
  );
};

export default Filters;
