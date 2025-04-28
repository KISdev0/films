import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <h3 className={styles.header}>
        Фильтры<button className={styles.buttonClose}>X</button>
      </h3>
      <label className={styles.sort}>Сортировать по:</label>
      <select className={styles.select}>
        <option>Популярности</option>
        <option>Дате выхода</option>
        <option>Рейтингу</option>
      </select>

      <label className={styles.header_genre}>Жанры</label>
      <div className={styles.checkboxes}>
        <label>
          <input type="checkbox" /> Комедия
        </label>
        <label>
          <input type="checkbox" /> Боевик
        </label>
        <label>
          <input className={styles.check} type="checkbox" /> Драма
        </label>
      </div>
    </div>
  );
};

export default Filters;
