import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  placeholder?: string;
}

const Select = ({
  label,
  options,
  value,
  onChange,
  id,
  placeholder,
}: SelectProps) => {
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
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}

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
