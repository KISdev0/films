import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  options: string[];
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
}

const Select = ({ label, options, value, onChange, id }: SelectProps) => {
  const selectId = id || `select-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={selectId} className={styles.sort}>
        {label}
      </label>
      <select
        id={selectId}
        className={styles.select}
        value={value}
        onChange={onChange}
      >
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
