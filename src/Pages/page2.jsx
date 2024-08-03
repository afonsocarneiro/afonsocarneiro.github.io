import styles from '../style';
import { Footer, ProjectCard } from '../components';
import TeamContextProvider from '../TeamContext';

export function Page2() {
	return (
		<TeamContextProvider>
			<div className='bg-primary w-full overflow-hidden'>
				<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<ProjectCard />
						<Footer />
					</div>
				</div>
			</div>
		</TeamContextProvider>
	);
}
