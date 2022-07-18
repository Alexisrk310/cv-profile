import React from 'react';
import { Formik, ErrorMessage } from 'formik';

export const Contact = () => {
	const handleSubmit = () => {
		alert('Enviado');
	};
	const validateEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return (
		<div className="board-contact">
			<Formik
				initialValues={{ name: '', email: '' }}
				onSubmit={handleSubmit}
				validate={(valores) => {
					let error = {};
					if (!valores.name) {
						error.name = 'Digita tu nombre';
					}
					if (!validateEmail.test(!valores.email)) {
						error.email = 'Digita tu de forma correcta';
					}
					return error;
				}}>
				{({ errors, handleBlur, handleChange, handleSubmit, values }) => {
					return (
						<div className="container-contact">
							<div className="font-main white w-25">
								<h2 className="bold contact-me">Contact me</h2>
								<p>Fill in the form to start a conversation</p>
								<p>
									You can contact me with any questions, suggestions or just to
									say hi. I am always open to new ideas and collaborations. It
									can be anything like collaborating on good projects or
									startups or freelancing or gaming or anything else.
								</p>
							</div>
							<div className="board-form">
								<form onSubmit={handleSubmit} className=" form-contact  ">
									<div className="mb-3">
										<label
											for="exampleInputName"
											className="form-label font-main white">
											Name
										</label>
										<input
											type="text"
											className="form-control"
											id="exampleInputName"
											aria-describedby="emailHelp"
											name="name"
											onChange={handleChange}
											value={values.name}
											onBlur={handleBlur}
										/>

										<ErrorMessage
											name="name"
											component={() => (
												<p className="text-danger">{errors.name}</p>
											)}
										/>
									</div>
									<div className="mb-3 ">
										<label
											for="exampleInputEmail"
											className="form-label font-main white">
											Email
										</label>
										<input
											type="email"
											className="form-control "
											id="exampleInputEmail"
											name="email"
											onChange={handleChange}
											value={values.email}
											onBlur={handleBlur}
										/>
										<ErrorMessage
											name="email"
											component={() => (
												<p className="text-danger">{errors.email}</p>
											)}
										/>
									</div>

									<button
										type="submit"
										className="btn btn-primary d-block w-100">
										Submit
									</button>
								</form>
							</div>
						</div>
					);
				}}
			</Formik>
		</div>
	);
};
