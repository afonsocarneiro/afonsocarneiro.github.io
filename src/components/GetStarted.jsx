import Styles from '../style';
import { arrowUp } from '../assets/index3';

const GetStarted = () => {
	return (
		<div className={`${Styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
			<div className={`${Styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
				<div className={`${Styles.flexStart} flex-row`}>
					<p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
						<span className='text-gradient'>Começa</span>
					</p>
					<img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
				</div>
				<p className='font-poppins font-medium text-[18px] leading-[23px]'>
					<span className='text-gradient'>Agora</span>
				</p>
			</div>
		</div>
	);
};

export default GetStarted;
