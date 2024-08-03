import './App.css';
import { useState } from 'react';
import { Home } from './Pages/home';
import { Page1 } from './Pages/page1';
import { Page2 } from './Pages/page2.jsx';
import { Page3 } from './Pages/page3';
import CRUD from './Pages/CRUD';
import { Educacao, SobreMim, CTA, CardDeal, Clients, Footer, Hero, Navbar2, Stats, Testimonials } from './components';
import TeamContextProvider from './TeamContext';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Toggle } from './components/Toggle';

export default function App() {
	const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [isDark, setIsDark] = useState(preference);

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/toggle' element={<Toggle isDark={isDark} setIsDark={setIsDark} />} />
					<Route path='/' element={<Home />} />
					<Route path='/page1' element={<Page1 />} />
					<Route path='/page2' element={<Page2 />} />
					<Route path='/page3' element={<Page3 />} />
					<Route path='/CRUD' element={<CRUD />} />
				</Route>
			</Routes>
		</Router>
	);
}
