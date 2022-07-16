import React from 'react';
import { Formik, ErrorMessage } from 'formik';

export const Contact = () => {
	const handleSubmit = () => {
		alert('Enviado');
	};
	const validateEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return (
		<>
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
						<div className="content-form">
							<form
								onSubmit={handleSubmit}
								className="d-flex flex-column justify-content-center align-items-center form-contact">
								<div className="mb-3 w-50">
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
								<div className="mb-3 w-50">
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

								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</form>
						</div>
					);
				}}
			</Formik>
		</>
	);
};
