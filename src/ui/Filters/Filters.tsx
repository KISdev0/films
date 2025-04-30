import { useState } from "react";
import Checkboxes from "../Checkboxes/Checkboxes";
import Select from "../Select/Select";
import styles from "./Filters.module.css";

const Filters = () => {
  const sortOptions = ["Популярности", "Дате выхода", "Рейтингу"];
  const yearOptions = ["2020", "2019", "2018"];
  const genres = ["Комедия", "Боевик", "Драма"];

  const [sortBy, setSortBy] = useState<string>();
  const [year, setYear] = useState<string>();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleChangeGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleResetFilters = () => {
    setSortBy(sortOptions[0]);
    setYear(yearOptions[0]);
    setSelectedGenres([]);
  };

  return (
    <div className={styles.filters}>
      <h3 className={styles.header}>
        Фильтры<button className={styles.buttonClose}>X</button>
        <button
          onClick={handleResetFilters}
          className={styles.buttonResetFilters}
        >
          Сбросить фильтры
        </button>
      </h3>

      <Select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        label="Сортировать по:"
        options={sortOptions}
      />
      <Select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        label="Год реллиза:"
        options={yearOptions}
      />
      <Checkboxes
        label="Жанры"
        options={genres}
        selectedValues={selectedGenres}
        onChange={handleChangeGenre}
      />
    </div>
  );
};

export default Filters;
