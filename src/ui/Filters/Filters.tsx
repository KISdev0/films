import { createContext, useReducer } from "react";
import Checkboxes from "../Checkboxes/Checkboxes";
import Select from "../Select/Select";
import styles from "./Filters.module.css";

interface StateType {
  sortBy: string;
  year: string;
  selectedGenres: string[];
}

type ActionType =
  | { type: "SET_SORT_BY"; playload: string }
  | { type: "SET_YEAR"; playload: string }
  | { type: "TOGGLE_GENRE"; playload: string }
  | { type: "RESET-FILTERS" };

interface ContextProps {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

const FiltersContext = createContext<ContextProps | undefined>(undefined);

const initialState: StateType = {
  sortBy: "Популярности",
  year: "2020",
  selectedGenres: [],
};

const filterReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return { ...state, sortBy: action.playload };
    case "SET_YEAR":
      return { ...state, year: action.playload };
    case "TOGGLE_GENRE":
      return {
        ...state,
        selectedGenres: state.selectedGenres.includes(action.playload)
          ? state.selectedGenres.filter((g) => g !== action.playload)
          : [...state.selectedGenres, action.playload],
      };
    case "RESET-FILTERS":
      return initialState;
    default:
      return state;
  }
};

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FiltersContext.Provider value={{ state, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const Filters = () => {
  const sortOptions = ["Популярности", "Дате выхода", "Рейтингу"];
  const yearOptions = ["2020", "2019", "2018"];
  const genres = ["Комедия", "Боевик", "Драма"];

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const handleChangeGenre = (genre: string) => {
    dispatch({ type: "TOGGLE_GENRE", playload: genre });
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
          dispatch({ type: "SET_SORT_BY", playload: e.target.value })
        }
        label="Сортировать по:"
        options={sortOptions}
      />
      <Select
        value={state.year}
        onChange={(e) =>
          dispatch({ type: "SET_YEAR", playload: e.target.value })
        }
        label="Год реллиза:"
        options={yearOptions}
      />
      <Checkboxes
        label="Жанры"
        options={genres}
        selectedValues={state.selectedGenres}
        onChange={handleChangeGenre}
      />
    </div>
  );
};
