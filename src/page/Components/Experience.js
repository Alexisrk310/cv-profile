import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

export const Experience = () => {
	return (
		<div className="container-experience d-flex justify-content-center align-item">
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="2021 - 2022"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<FaReact />}>
					<h3 className="vertical-timeline-element-title">
						Software developer
					</h3>
					<h6 className="vertical-timeline-element-subtitle">
						IsysIngenieria E.U
					</h6>
					<h4 className="vertical-timeline-element-subtitle">
						Colombia, Cartagena de indias
					</h4>
					<p>
						Create user interfaces with the aim of facilitating the development
						of applications on a single page.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					date="2020 - current"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<SiUdemy />}>
					<h3 className="vertical-timeline-element-title">Cursos Udemy</h3>
					<h4 className="vertical-timeline-element-subtitle">Udemy</h4>
					<p>It is an online course platform</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};
