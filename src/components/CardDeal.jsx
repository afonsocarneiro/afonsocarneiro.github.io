import { award } from '../assets/index3';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Realizações e Conquistas <br className='sm:block hidden' />
				</h2>
				<p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
				<Button styles={`mt-10`} />
			</div>
			<div className={layout.sectionImg}>
				<img src={award} alt='award' className='w-[100%] h-[100%]' />
			</div>
		</section>
	);
};

export default CardDeal;
