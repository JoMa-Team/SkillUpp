import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import LottieBook from '../../common/LottieBook/LottieBook';
import styles from './Homepage.module.scss';
import logo from '../../../assets/logo-text.png';

const Homepage = () => {
	return (
		<main>
			<div className={styles.main_wrapper}>
				<div className={styles.lottie_wrapper}>
					<LottieBook />
				</div>
				<div className={styles.text_wrapper}>
					<img src={logo} alt='skillUpp logo' />
					<p>A sentence explaining the app.</p>
				</div>
				<div className={styles.buttons_wrapper}>
					<Link to='login'>
						<Button>Log In</Button>
					</Link>
					<Link to='signup'>
						<Button>Sign Up</Button>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Homepage;
