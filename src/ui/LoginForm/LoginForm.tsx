import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  onClose: () => void;
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username });
    onClose();
  };

  return (
    <div className={styles.authForm}>
      <h2>
        Вход{" "}
        <button onClick={onClose} className={styles.btnClose}>
          X
        </button>
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.btnLogin} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
