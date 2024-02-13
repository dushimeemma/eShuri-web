'use client';

import Logo from '@/components/shared/logo/Logo';
import styles from './login.module.css';
import Title from '@/components/shared/Title/Title';
import TextField from '@/components/shared/text-field/TextField';
import Button from '@/components/shared/button/Button';
import CheckBox from '@/components/shared/check-box/CheckBox';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { login } from '@/lib/store/features/auth/authSlice';
import { ChangeEvent, useState } from 'react';
import { RootState } from '@/lib/store/store';

function MentorLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const loading = useAppSelector((state: RootState) => state.auth.loading);
  const dispatch = useAppDispatch();
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(
      login({
        email,
        password,
      })
    );
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <Title
          classes={styles.title}
          label='Mentor'
        />
        <TextField
          label='Email'
          placeholder='Input your email'
          type='email'
          classes={styles.input}
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
        <TextField
          label='Password'
          type='password'
          placeholder='Input your password'
          classes={styles.input}
          value={password}
          onChange={(e) => handleChangePassword(e)}
        />
        <CheckBox containerClasses={styles.checkbox} />
        <Button
          classes={styles.button}
          onClick={handleSubmit}
          label={loading ? 'loading...' : 'Login'}
        />
      </div>
    </div>
  );
}

export default MentorLogin;
