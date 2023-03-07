import Lottie from 'lottie-react';
import animationData from '../../../lotties/dancing-book.json';
import styles from './LottieBook.module.scss';

const LottieBook = () => {
	return <Lottie animationData={animationData} className={styles.lottie} />;
};

export default LottieBook;
