import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../Components/HomePage';
import { NavBar } from '../Components/NavBar';
import { NoFoundPage } from '../Components/NoFoundPage';
import { About } from '../page/Components/About';
import { Contact } from '../page/Components/Contact';
import { Experience } from '../page/Components/Experience';
import { Projects } from '../page/Components/Projects';
import { Resume } from '../page/Components/Resume';
import { Skills } from '../page/Components/Skills';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="*" element={<NoFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};
