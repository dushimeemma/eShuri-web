import { MouseEventHandler } from 'react';
import styles from './button.module.css';

function Button({ label, onClick, classes }: Props) {
  return (
    <button
      className={`${styles.container} ${classes}`}
      type='button'
      onClick={onClick}
    >
      {label ?? 'Login'}
    </button>
  );
}

export default Button;

interface Props {
  label?: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}
