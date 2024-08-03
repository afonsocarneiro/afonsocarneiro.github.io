import { apple, book, google } from '../assets/index3';
import styles, { layout } from '../style';

const Educacao = () => {
	return (
		<section id='product' className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img src={book} alt='book' className='w-[100%] h-[100%] relative z-[5]' />
				<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
				<div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
				<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
				<div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
				<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
			</div>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Educação <br className='sm:block hidden' />
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Ensino Secundário: Externato Ribadouro
					<br className='sm:block hidden' />
					De -/-/- até -/-/-
					<br className='sm:block hidden' />
					Rua de Santa Catarina, Porto
					<br className='sm:block hidden' />
					<br className='sm:block hidden' />
					Colégio: Faculdade de Ciências da Universidade do Porto
					<br className='sm:block hidden' />
					De -/-/- até -/-/-
					<br className='sm:block hidden' />
					Rua do Campo Alegre, Porto
					<br className='sm:block hidden' />
					Licenciatura em Ciências e Tecnologias do Ambiente
				</p>

				<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
					<img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
					<img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain cursor-pointer' />
				</div>
			</div>
		</section>
	);
};

export default Educacao;
