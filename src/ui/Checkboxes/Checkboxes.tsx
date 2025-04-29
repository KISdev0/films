import styles from "./Checkboxes.module.css";

interface CheckboxesProps {
  label: string;
  options: string[];
}

const Checkboxes = ({ label, options }: CheckboxesProps) => {
  return (
    <div className={styles.checkboxesContainer}>
      <label className={styles.header_genre}>{label}</label>
      <div className={styles.checkboxes}>
        {options.map((option) => (
          <label key={option}>
            <input type="checkbox" /> {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;
