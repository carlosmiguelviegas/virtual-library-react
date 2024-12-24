import styles from './SelectDropdown.module.css';

const SelectDropdown = ({ label, list, handlerOnChange }) => {

  const optionsToDisplay = list
    .map(option => 
      <option style={{backgroundColor: blanchedalmond}} value={option['code']} onChange={handlerOnChange}>
        {option['label']}
      </option>
    );

  return (
    <div className={styles.formControl}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select}>
        <section>
          {optionsToDisplay}
        </section>
      </select>
    </div>
  );
};

export default SelectDropdown;
