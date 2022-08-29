import React from 'react';
import { NavLink, Link } from 'react-router-dom';
export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link className="navbar-brand code" to="/">
					{'<Code/>'}
				</Link>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active nav-link' : 'nav-link'
								}
								aria-current="page"
								to="/">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active nav-link' : 'nav-link'
								}
								to="/experience">
								Experience
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active nav-link' : 'nav-link'
								}
								to="/skills">
								Skills
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active nav-link' : 'nav-link'
								}
								to="/projects">
								Projects
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active nav-link' : 'nav-link'
								}
								to="/contact">
								Contact
							</NavLink>
						</li>
						<li className="nav-item">
							<a
								href="/#"
								 {/*href="https://drive.google.com/file/d/1syzqwubtp-EGGYtJO5O2InGBOQ1ZYIqy/view?usp=sharing" */}
								className="nav-link"
								target="Blank">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
