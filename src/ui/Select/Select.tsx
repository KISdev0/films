import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  options: string[];
}

const Select = ({ label, options }: SelectProps) => {
  return (
    <div className={styles.selectContainer}>
      <label className={styles.sort}>{label}</label>
      <select className={styles.select}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
