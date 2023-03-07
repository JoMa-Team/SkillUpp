import Button from '../../common/Button/Button';
import styles from './Signup.module.scss';

const Signup = () => {
	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form}>
				<input
					className={styles.signupInput}
					type='text'
					placeholder='username'
				></input>
				<input
					className={styles.signupInput}
					type='email'
					placeholder='email@email.com'
				></input>
				<input
					className={styles.signupInput}
					type='password'
					placeholder='password'
				></input>
				<input
					className={styles.signupInput}
					type='password'
					placeholder='repeat password'
				></input>
				<div className={styles.signupButton_wrapper}>
					<Button type='submit'>Sign up</Button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
