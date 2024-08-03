import styles from '../style';
import { Educacao, SobreMim, CTA, CardDeal, Clients, Footer, Hero, Navbar2, Stats, Testimonials } from '../components';
import TeamContextProvider from '../TeamContext';

export function Home() {
	return (
		<TeamContextProvider>
			<div className='bg-primary w-full overflow-hidden'>
				<div className={`${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Navbar2 />
					</div>
				</div>

				<div className={`bg-primary ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Hero />
					</div>
				</div>

				<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Stats />
						<SobreMim />
						<Educacao />
						<CardDeal />
						<Testimonials />
						<Clients />
						<CTA />
						<Footer />
					</div>
				</div>
			</div>
		</TeamContextProvider>
	);
}
