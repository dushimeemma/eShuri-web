import { ChangeEventHandler } from 'react';
import styles from './checkbox.module.css';

function CheckBox({ containerClasses, value, label, onChange }: Props) {
  return (
    <div className={`${styles.container} ${containerClasses}`}>
      <input
        type='checkbox'
        value={value ?? ''}
        className={styles.input}
        onChange={onChange}
      />
      <label
        htmlFor='default-checkbox'
        className={styles.label}
      >
        {label ?? 'Keep me logged in'}
      </label>
    </div>
  );
}

export default CheckBox;

interface Props {
  containerClasses?: string;
  value?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
