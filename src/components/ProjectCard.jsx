import styles from '../style';
import TeamContextProvider from '../TeamContext';
import { folder2 } from '../assets/index3';

export default function ProjectCard() {
	return (
		<TeamContextProvider>
			<body>
				<div className={`${styles.boxWidth} text-white`}>
					<div className={`${styles.paddingX} ${styles.flexCenter}`}>
						<div className={`${styles.boxWidth}`}>
							<article>
								<header>
									<span className='date'>April 24, 2017</span>
									<h2>
										<a href='#'>
											Sed magna
											<br />
											ipsum faucibus
										</a>
									</h2>
								</header>
								<a href='#' className='image fit'>
									<img src={folder2} alt='' />
								</a>
								<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
								<ul className='actions special'>
									<li>
										<a href='#' className='button'>
											Full Story
										</a>
									</li>
								</ul>
							</article>
							<article>
								<header>
									<span className='date'>April 22, 2017</span>
									<h2>
										<a href='#'>
											Primis eget
											<br />
											imperdiet lorem
										</a>
									</h2>
								</header>
								<a href='#' className='image fit'>
									<img src={folder2} alt='' />
								</a>
								<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
								<ul className='actions special'>
									<li>
										<a href='#' className='button'>
											Full Story
										</a>
									</li>
								</ul>
							</article>
							<article>
								<header>
									<span className='date'>April 18, 2017</span>
									<h2>
										<a href='#'>
											Ante mattis
											<br />
											interdum dolor
										</a>
									</h2>
								</header>
								<a href='#' className='image fit'>
									<img src={folder2} alt='' />
								</a>
								<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
								<ul className='actions special'>
									<li>
										<a href='#' className='button'>
											Full Story
										</a>
									</li>
								</ul>
							</article>
							<article>
								<header>
									<span className='date'>April 14, 2017</span>
									<h2>
										<a href='#'>
											Tempus sed
											<br />
											nulla imperdiet
										</a>
									</h2>
								</header>
								<a href='#' className='image fit'>
									<img src={folder2} alt='' />
								</a>
								<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
								<ul className='actions special'>
									<li>
										<a href='#' className='button'>
											Full Story
										</a>
									</li>
								</ul>
							</article>
							<article>
								<header>
									<span className='date'>April 11, 2017</span>
									<h2>
										<a href='#'>
											Odio magna
											<br />
											sed consectetur
										</a>
									</h2>
								</header>
								<a href='#' className='image fit'>
									<img src={folder2} alt='' />
								</a>
								<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
								<ul className='actions special'>
									<li>
										<a href='#' className='button'>
											Full Story
										</a>
									</li>
								</ul>
							</article>
							<article>
								<header>
									<span className='date'>April 7, 2017</span>
									<h2>
										<a href='#'>
											Augue lorem
											<br />
											primis vestibulum
										</a>
									</h2>
								</header>
								<a href='#' className='image fit'>
									<img src={folder2} alt='' />
								</a>
								<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
								<ul className='actions special'>
									<li>
										<a href='#' className='button'>
											Full Story
										</a>
									</li>
								</ul>
							</article>
						</div>
					</div>
				</div>

				<script src='assets/js/jquery.min.js'></script>
				<script src='assets/js/jquery.scrollex.min.js'></script>
				<script src='assets/js/jquery.scrolly.min.js'></script>
				<script src='assets/js/browser.min.js'></script>
				<script src='assets/js/breakpoints.min.js'></script>
				<script src='assets/js/util.js'></script>
				<script src='assets/js/main.js'></script>
			</body>
			;
		</TeamContextProvider>
	);
}
