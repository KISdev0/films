import styles from "./Checkboxes.module.css";

interface CheckboxesProps {
  label: string;
  options: string[];
  selectedValues:string[] | undefined;
  onChange:(genre:string)=>void;
}

const Checkboxes = ({ label, options, selectedValues, onChange }: CheckboxesProps) => {
  return (
    <div className={styles.checkboxesContainer}>
      <label className={styles.header_genre}>{label}</label>
      <div className={styles.checkboxes}>
        {options.map((option) => (
          <label key={option}>
            <input
             type="checkbox" 
             checked={selectedValues?.includes(option)}
             onChange={()=>onChange(option)}/> {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;
