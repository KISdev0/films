import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  options: string[];
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ label, options, value, onChange }: SelectProps) => {
  return (
    <div className={styles.selectContainer}>
      <label className={styles.sort}>{label}</label>
      <select className={styles.select} value={value} onChange={onChange}>
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
