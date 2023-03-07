import Button from '../../common/Button/Button';
import styles from './Login.module.scss';

const Login = () => {
	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form}>
				<input
					className={styles.loginInput}
					type='email'
					placeholder='email@email.com'
				></input>
				<input
					className={styles.loginInput}
					type='password'
					placeholder='password'
				></input>
				<div className={styles.loginButton_wrapper}>
					<Button type='submit'>Log in</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
