import { useReducer } from "react";
import Checkboxes from "../Checkboxes/Checkboxes";
import Select from "../Select/Select";
import styles from "./Filters.module.css";
import { FILTER_OPTIONS } from "../../consts";

type StateType = {
  sortBy: string;
  year: string;
  selectedGenres: string[];
};

type ActionType =
  | { type: "SET_SORT_BY"; payload: string }
  | { type: "SET_YEAR"; payload: string }
  | { type: "TOGGLE_GENRE"; payload: string }
  | { type: "RESET-FILTERS" };

const initialState: StateType = {
  sortBy: "",
  year: "",
  selectedGenres: [],
};

const filterReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SET_YEAR":
      return { ...state, year: action.payload };
    case "TOGGLE_GENRE":
      return {
        ...state,
        selectedGenres: state.selectedGenres.includes(action.payload)
          ? state.selectedGenres.filter((g) => g !== action.payload)
          : [...state.selectedGenres, action.payload],
      };
    case "RESET-FILTERS":
      return initialState;
    default:
      return state;
  }
};

const Filters = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const handleChangeGenre = (genre: string) => {
    dispatch({ type: "TOGGLE_GENRE", payload: genre });
  };

  const handleResetFilters = () => {
    dispatch({ type: "RESET-FILTERS" });
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
        value={state.sortBy}
        onChange={(e) =>
          dispatch({ type: "SET_SORT_BY", payload: e.target.value })
        }
        label="Сортировать по:"
        options={FILTER_OPTIONS.sortOptions}
        placeholder="Выбрать"
      />
      <Select
        value={state.year}
        onChange={(e) =>
          dispatch({ type: "SET_YEAR", payload: e.target.value })
        }
        label="Год реллиза:"
        options={FILTER_OPTIONS.yearOptions}
        placeholder="Выбрать"
      />
      <Checkboxes
        label="Жанры"
        options={FILTER_OPTIONS.genres}
        selectedValues={state.selectedGenres}
        onChange={handleChangeGenre}
      />
    </div>
  );
};

export default Filters;
