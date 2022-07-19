import React from 'react';

export const Skills = () => {
	return (
		<div className="container mt-5">
			<h1 className="white  font-main mb-1 skills">SKILLS</h1>
			<hr className="white " />
			<h3 className="font-main white">Programming</h3>
			<div className="row d-flex">
				<div className="d-flex mr-3 col mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/js.png'}
						alt="c++"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">Javascript</p>
				</div>
				<div className="d-flex mr-3 col mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/ts.png'}
						alt="c++"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">Typescript</p>
				</div>
				<div className="d-flex mr-3 col mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/c.png'}
						alt="c++"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">C++</p>
				</div>
			</div>

			<hr className="white mt-4" />
			<h3 className="font-main white">Front End Developer</h3>
			<div className="d-flex row">
				<div className="d-flex mr-3 col-sm-6 col-md-4 mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/react.png'}
						alt="c++"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">React</p>
				</div>
				<div className="d-flex mr-3 col-sm-6 col-md-4 mt-4 mt-md-0 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/bootstrap.png'}
						alt="bootstrap"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">Bootstrap</p>
				</div>
			</div>
			<hr className="white mt-4" />
			<h3 className="font-main white">DevOps</h3>
			<div className="d-flex row">
				<div className="d-flex mr-3 mr-3 col-sm-6 col-md-4 mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/git.png'}
						alt="c++"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">Gif</p>
				</div>
				<div className="d-flex mr-3 mr-3 col-sm-6 col-md-4 mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/github.png'}
						alt="c++"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">GifHub</p>
				</div>
			</div>
			<hr className="white mt-4" />
			<h3 className="font-main white">Tools</h3>
			<div className="d-flex">
				<div className="d-flex mr-3 animate__animated animate__backInLeft">
					<img
						src={process.env.PUBLIC_URL + '/assets/img/visualstudiocode.png'}
						alt="c++"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">Visual Studio Code</p>
				</div>
			</div>
		</div>
	);
};
