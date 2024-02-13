import { ChangeEventHandler } from 'react';

import styles from './textfield.module.css';

function TextField({
  label,
  placeholder,
  type,
  onChange,
  classes,
  value,
}: Props) {
  return (
    <div className={classes}>
      <label
        htmlFor={label ?? 'First name'}
        className={styles.label}
      >
        {label ?? 'First name'}
      </label>
      <input
        value={value}
        type={type ?? 'text'}
        className={styles.input}
        placeholder={placeholder ?? 'Input your email'}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  classes?: string;
}
