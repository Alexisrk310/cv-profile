import React from 'react';
// import project from './../../assets/img/project.jfif';
export const Projects = () => {
	return (
		<div className="container mt-4">
			<h1 className="font-main projects-text">PROJECTS</h1>
			<div className="d-flex flex-wrap ">
				<div className="card card-project m-2 animate__animated animate__backInDown">
					<h4 className="card-header">Project I</h4>
					<div className="card-body">
						<img
							src={process.env.PUBLIC_URL + '/assets/img/project.jfif'}
							alt="project"
							className="card-img-top"
						/>

						<p className="card-text">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</p>
						{/* <button className="btn btn-primary b-block w-100">VER</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};
