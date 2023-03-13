import Button from '../../common/Button/Button';
import styles from './Login.module.scss';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [secret, setSecret] = useState('');

	const emailInputChangeHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordInputChangeHandler = (event) => {
		setSecret(event.target.value);
	};

	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form} action='/login' method='POST'>
				<input
					className={styles.loginInput}
					type='email'
					value={email}
					onChange={emailInputChangeHandler}
					placeholder='email@email.com'
					name='email'
				></input>
				<input
					className={styles.loginInput}
					type='password'
					value={secret}
					onChange={passwordInputChangeHandler}
					placeholder='password'
					name='password'
				></input>
				<div className={styles.loginButton_wrapper}>
					<Button type='submit'>Log in</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
