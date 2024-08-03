import React from 'react';
import { useState, useEffect } from 'react';

// Função para validar os valores do formulário
const validateValues = values => {
	const errors = {};
	if (!values.name) errors.name = 'Your name is mandatory';
	if (!values.email) errors.email = 'You forgot to add an email';
	else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email not valid';
	if (!values.message) errors.message = 'Please add a message';
	return errors;
};

/* https://web3forms.com/ -> generate Access Key */
const Form = () => {
	const accessKey = '5fdbe0fb-d5ac-4d78-bf67-c554297e7a7c';

	const [result, setResult] = useState('');
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});

	// Lidar com as mudanças no formulário
	const handleChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		const updatedErrors = validateValues({ ...values, [name]: value });
		setErrors(updatedErrors);
	};

	// Envio do formulário
	const onSubmit = async event => {
		event.preventDefault();
		const validationErrors = validateValues(values);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setResult('Sending....');
		const formData = new FormData();
		Object.keys(values).forEach(key => formData.append(key, values[key]));
		formData.append('access_key', accessKey);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			});
			const data = await response.json();

			if (data.success) {
				setResult('Form Submitted Successfully');
				setValues({ name: '', email: '', phone: '', message: '' });
			} else {
				setResult(data.message);
			}
		} catch (error) {
			setResult('Error submitting the form');
		}
	};

	useEffect(() => {
		if (result === 'Form Submitted Successfully') {
			const timer = setTimeout(() => {
				setResult('');
			}, 5000);

			// Cleanup timeout if component unmounts
			return () => clearTimeout(timer);
		}
	}, [result]);

	return (
		<form onSubmit={onSubmit} className='mt-12 flex flex-col gap-8'>
			<div className='flex flex-col'>
				<label htmlFor='name' className='text-white font-medium mb-4'>
					Name
				</label>
				<input
					type='text'
					name='name'
					placeholder='Tell me your name...'
					value={values.name}
					className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
					onChange={handleChange}
				/>
				{errors.name && <small>{errors.name}</small>}
			</div>

			<div className='flex flex-col'>
				<label htmlFor='email' className='text-white font-medium mb-4'>
					Your email
				</label>
				<input
					type='text'
					name='email'
					placeholder="What's your web address?"
					value={values.email}
					className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
					onChange={handleChange}
				/>
				{errors.email && <small>{errors.email}</small>}
			</div>

			<div className='flex flex-col'>
				<label htmlFor='message' className='text-white font-medium mb-4'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					placeholder='What you want to say?'
					value={values.message}
					className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
					onChange={handleChange}
				></textarea>
				{errors.message && <small>{errors.message}</small>}
			</div>

			<button type='submit' className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
				Send message
			</button>

			{result && <p>{result}</p>}
		</form>
	);
};

export default Form;
