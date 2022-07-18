import React from 'react';
import Typed from 'react-typed';

export const About = () => {
	const handleGithub = () => {
		window.location.replace('https://github.com/Alexisrk310');
	};
	return (
		<div className="container container-about mt-5 d-flex justify-content-center align-items-center flex-column h-100 w-100">
			<div className="board-about d-flex justify-content-center align-items-center flex-column">
				<Typed
					strings={[
						'My Name is Alexis',
						"I'm a Junior",
						"I'm Software Development",
					]}
					className="font-main d-block text-center white profile"
					typeSpeed={150}
					backSpeed={100}
					loop
				/>
				{/* <div className="mt-4 text-center"> */}
				<p className="text-about text-center white font-main ">
					I like programming a lot. My bases are Javascript, React.js,
					Bootstrap, C++, Python. I invite you to my github and linkedin so you
					can know much more about me
				</p>
				{/* </div> */}
				<div className="d-flex justify-content-center">
					<i className="fa-brands fa-github github " onClick={handleGithub}></i>

					<a href="https://www.linkedin.com/in/alexis-miguel-gutierrez-ruiz-542364202/">
						<i className="fa-brands fa-linkedin linkedin"></i>
					</a>
				</div>
				<button className="btn  font-main d-block text-center mx-auto mt-4 button-about ">
					See more
				</button>
			</div>
		</div>
	);
};
