import React from 'react';
import './Footer.css';
import '../App.css';

function Footer() {
	return (
		<footer className='footer'>
			<div className='sponsors'>SPONSORED BY</div>
			<div className='sponsor-list'>
				<a
					href='https://cncmadness.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='sponsor-logo-link'
				>
					<img
						src='/images/cncMadness.png'
						alt='CNC Madness'
						className='sponsor-logo-img'
					/>
				</a>
        <span className='sponsor-sep'>|</span>
				<a
					href='https://repeat-robotics.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='sponsor-logo-link'
				>
					<img
						src='/images/repeat-robotics.png'
						alt='Repeat Robotics'
						className='sponsor-logo-img'
					/>
				</a>
        <span className='sponsor-sep'>|</span>
				<a
					href='https://customatx.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='sponsor-logo-link'
				>
					<img
						src='/images/customSheetMetal.avif'
						alt='Custom Sheet Metal'
						className='sponsor-logo-img'
					/>
				</a>
				<span className='sponsor-sep'>|</span>
				<a
					href='https://sendcutsend.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='sponsor-logo-link'
				>
					<img
						src='/images/sendCutSend.png'
						alt='SendCutSend'
						className='sponsor-logo-img'
					/>
				</a>
				<span className='sponsor-sep'>|</span>
				<a
					href='https://www.polymaker.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='sponsor-logo-link'
				>
					<img
						src='/images/polymaker.png'
						alt='Polymaker'
						className='sponsor-logo-img'
					/>
				</a>
			</div>

			<div className='footer-social'>
				<a
					href='https://www.instagram.com/experimental_division/'
					target='_blank'
					rel='noopener noreferrer'
					className='footer-icon'
				>
					{/* Instagram SVG */}
					<svg width='28' height='28' viewBox='0 0 24 24' fill='#da7401'>
						<path d='M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-.9.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.2 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.3 2.1.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1 1 .2 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.2-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.3-2.1-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-1-.2-2.1-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.2a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0 1.8a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm6.2-1.3a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z' />
					</svg>
				</a>
				<a
					href='https://discord.gg/VPjuK8f5kq'
					target='_blank'
					rel='noopener noreferrer'
					className='footer-icon'
				>
					{/* Discord SVG */}
					<svg width='28' height='28' viewBox='0 0 24 24' fill='#da7401'>
						<path d='M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.508 18.508 0 0 0-5.487 0 12.317 12.317 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.683 4.369a.07.07 0 0 0-.032.027C.533 8.159-.319 11.87.099 15.539a.082.082 0 0 0 .031.056c2.052 1.507 4.042 2.422 5.992 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.272-.545-1.872-.892a.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.197.372.291a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.892.076.076 0 0 0-.04.105c.36.699.772 1.364 1.225 1.994a.076.076 0 0 0 .084.028c1.96-.607 3.951-1.522 5.993-3.029a.077.077 0 0 0 .031-.055c.5-4.099-.838-7.765-3.548-11.143a.061.061 0 0 0-.032-.028zM8.02 14.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419z' />
					</svg>
				</a>
				<a href='mailto:theexperimentaldivision@gmail.com' className='footer-icon'>
					{/* Email SVG */}
					<svg width='28' height='28' viewBox='0 0 24 24' fill='#da7401'>
						<path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 7 8-7v10z' />
					</svg>
				</a>
			</div>

			<div className='footer-copyright'>
				&copy; {new Date().getFullYear()} Experimental Division Combat Robotics
				Club
			</div>
		</footer>
	);
}

export default Footer;
