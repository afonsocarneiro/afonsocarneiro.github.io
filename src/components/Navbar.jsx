import { Link } from 'react-router-dom';

export function Navbar() {
	return (
		<>
			<Link to='/'>
				<button className='py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'>Home </button>
			</Link>
			<Link to='/page1'>
				<button className='py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'>page1 </button>
			</Link>
			<Link to='/page2'>
				<button className='py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'>page2 </button>
			</Link>
			<Link to='/page3'>
				<button className='py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none'>page3 </button>
			</Link>
		</>
	);
}
