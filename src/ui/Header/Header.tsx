import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p>Фильмы</p>
      <button>Войти</button>
    </header>
  );
};

export default Header;
