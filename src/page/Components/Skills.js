import React from 'react';

// IMG
import js from './../../assets/img/js.png';
import ts from './../../assets/img/ts.png';
import c from './../../assets/img/c++.svg';
import react from './../../assets/img/react.png';
import bootstrap from './../../assets/img/bootstrap.png';
import git from './../../assets/img/git.png';
import github from './../../assets/img/github.png';
import visualstudiocode from './../../assets/img/visualstudiocode.png';

export const Skills = () => {
	return (
		<div className="container mt-5">
			<h1 className="white  font-main mb-1">SKILLS</h1>
			<hr className="white " />
			<h3 className="font-main white">Programming</h3>
			<div className="row d-flex">
				<div className="d-flex mr-3 col mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img src={js} alt="Javascript" className="icon-lenguaje" />
					<p className="text-lenguaje font-main">Javascript</p>
				</div>
				<div className="d-flex mr-3 col mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img src={ts} alt="Typescript" className="icon-lenguaje" />
					<p className="text-lenguaje font-main">Typescript</p>
				</div>
				<div className="d-flex mr-3 col mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img src={c} alt="c++" className="icon-lenguaje" />
					<p className="text-lenguaje font-main">C++</p>
				</div>
			</div>

			<hr className="white mt-4" />
			<h3 className="font-main white">Front End Developer</h3>
			<div className="d-flex row">
				<div className="d-flex mr-3 col-sm-6 col-md-4 mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img src={react} alt="Javascript" className="icon-lenguaje" />
					<p className="text-lenguaje font-main">React</p>
				</div>
				<div className="d-flex mr-3 col-sm-6 col-md-4 mt-4 mt-md-0 animate__animated animate__backInLeft">
					<img src={bootstrap} alt="Bootstrap" className="icon-lenguaje" />
					<p className="text-lenguaje font-main">Bootstrap</p>
				</div>
			</div>
			<hr className="white mt-4" />
			<h3 className="font-main white">DevOps</h3>
			<div className="d-flex row">
				<div className="d-flex mr-3 mr-3 col-sm-6 col-md-4 mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img src={git} alt="Javascript" className="icon-lenguaje" />
					<p className="text-lenguaje font-main">Gif</p>
				</div>
				<div className="d-flex mr-3 mr-3 col-sm-6 col-md-4 mt-4 mt-sm-0 animate__animated animate__backInLeft">
					<img src={github} alt="Javascript" className="icon-lenguaje" />
					<p className="text-lenguaje font-main">GifHub</p>
				</div>
			</div>
			<hr className="white mt-4" />
			<h3 className="font-main white">Tools</h3>
			<div className="d-flex">
				<div className="d-flex mr-3 animate__animated animate__backInLeft">
					<img
						src={visualstudiocode}
						alt="Javascript"
						className="icon-lenguaje"
					/>
					<p className="text-lenguaje font-main">Visual Studio Code</p>
				</div>
			</div>
		</div>
	);
};
