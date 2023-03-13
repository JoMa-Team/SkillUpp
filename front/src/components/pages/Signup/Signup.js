import Button from '../../common/Button/Button';
import styles from './Signup.module.scss';
import { useState } from 'react';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [secret, setSecret] = useState('');
	const [secretRepeat, setSecretRepeat] = useState('');

	const usernameInputChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const emailInputChangeHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordInputChangeHandler = (event) => {
		setSecret(event.target.value);
	};

	const passwordRepeatChangeHandler = (event) => {
		setSecretRepeat(event.target.value);
	};

	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form} action='/signup' method='POST'>
				<input
					className={styles.signupInput}
					type='text'
					value={username}
					onChange={usernameInputChangeHandler}
					placeholder='username'
					name='username'
				></input>
				<input
					className={styles.signupInput}
					type='email'
					value={email}
					onChange={emailInputChangeHandler}
					placeholder='email@email.com'
					name='email'
				></input>
				<input
					className={styles.signupInput}
					type='password'
					value={secret}
					onChange={passwordInputChangeHandler}
					placeholder='password'
					name='password'
				></input>
				<input
					className={styles.signupInput}
					type='password'
					value={secretRepeat}
					onChange={passwordRepeatChangeHandler}
					placeholder='repeat password'
					name='repeatPassword'
				></input>
				<div className={styles.signupButton_wrapper}>
					<Button type='submit'>Sign up</Button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
